// Google test

var frisby = require('frisby');

frisby.globalSetup({
	request: {
		headers: {
			'Authorization': 'Basic bGVvLmZjeEBnbWFpbC5jb206bGVvIUAjNDU2'
		}
	}
});
/*
frisby
	.create('Get google root page')
	.get('http://www.google.com')
	//.inspectBody()
	.expectStatus(200)
	.toss();
frisby
	.create('Todo.ly should return a list of all projects.')
	.get('https://todo.ly/api/projects.json')
	.expectStatus(200)
	.expectJSON('6', {
		Content: 'Project 1471451539635'
	} )
	.toss();
*/

frisby
	.create('Todo.ly should return an specific project.')
	.get('https://todo.ly/api/projects/3524039.json')
	.expectStatus(200)
	.expectHeaderContains('Server', 'Microsoft-IIS')
	.expectJSON( {Id: 3524039} )
	//.expectJSON( {Id: Number} ) // Friby Bug?
	.expectJSONTypes( {Id: Number} )
	.afterJSON(function(jsonData){ 
		//validations 
		var regExp = /Date\([0-9]{13}\)/;
		var actRes = regExp.test(jsonData.LastUpdatedDate);
		console.log('LastUpdatedDate', jsonData.LastUpdatedDate, actRes);
		expect(actRes).toBeTruthy();
	})
	.toss();

