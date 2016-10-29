// allItemsHaveSameProjectIdSpec.js

var frisby = require('frisby');
var faker = require('faker');

frisby.globalSetup({
	request: {
		headers: {
			'Authorization': 'Basic bGVvLmZjeEBnbWFpbC5jb206bGVvIUAjNDU2'
		}
	}
});

var newProject = {
	Content: faker.name.title()
};

frisby
	.create('Todo.ly should return an specific project.')
	.post('https://todo.ly/api/projects.json', newProject, {json: true})
	.expectStatus(200)
	.expectJSON(newProject)
	.afterJSON(function(project){
		
		var firstItem = {
			Content: faker.name.title(),
			ProjectId: project.Id
		};

		frisby
			.create('Create an item')
			.post('https://todo.ly/api/items.json', firstItem, {json: true})
			.expectStatus(200)
			.expectJSON(firstItem)
			.afterJSON(function(item){
				var secondtItem = {
					Content: faker.name.title(),
					ProjectId: project.Id
					};

				frisby
					.create('Create a second item')
					.post('https://todo.ly/api/items.json', secondtItem, {json: true})
					.expectStatus(200)
					.expectJSON(secondtItem)
					.afterJSON(function(item2){
						frisby
							.create('Todo.ly should return an specific project.')
							.get('https://todo.ly/api/projects/'+ project.Id +'/items.json', secondtItem, {json: true})
							.expectStatus(200)
							.expectJSON('*', {
								ProjectId: project.Id
							})
							.toss();
					})
					.toss();
			})
			.toss();		
	})
	.toss();