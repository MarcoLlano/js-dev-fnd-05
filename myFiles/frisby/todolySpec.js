//Todoly spec
var frisby = require('frisby');

frisby.globalSetup({
	request: {
		headers: {
			'Authorization' : 'Basic bGxhbm8ubWFyY29AZ21haWwuY29tOjM2OXhsYnVqMjU=',
			'Content-Type' : 'application/json'
		}
	}	
});
/*
frisby
	.create('Should return a specific project')
	.get('https://todo.ly/api/projects/3355036.json')
	.inspectJSON()
	.expectJSON({ Id: 3355036 })
	.expectJSONTypes({ Id: Number })
	.expectHeader('Server', 'Microsoft-IIS/8.0')
	.afterJSON(function(jsonData){ 
		//validations 
		console.log('LastUpdatedDate', jsonData.LastUpdatedDate);
		var regExp = /Date\([0-9]{13}\)/;
		var actRes = regExp.test(jsonData.LastUpdatedDate);
		console.log('LastUpdatedDate', jsonData.LastUpdatedDate, actRes);
		expect(actRes).toBeTruthy();
	}) 
	.expectStatus(200)
.toss();

frisby
	.create('Get all projects')
	.get('https://todo.ly/api/projects.json')
	.expectStatus(200)
.toss();
*/
/*
frisby
	.create('Should create a project with a required value')
	.post('https://todo.ly/api/projects.json', {Content: "My new project frisby"}, { json: true })
	.expectJSON({Content: "My new project frisby" })
	.expectStatus(200)
.toss();*/

frisby
	.create('Should not create a project with a required value')
	.post('https://todo.ly/api/projects.json', 
		{
			Content: " ",
			Icon: 4
		}, { json: true })
	.expectJSON({Content: " " })
	.expectStatus(200)
.toss();