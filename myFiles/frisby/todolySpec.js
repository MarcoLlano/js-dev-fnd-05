//Todoly spec

var frisby = require('frisby');

frisby.globalSetup({
	request: {
		headers: {
			'Authorization' : 'Basic bGxhbm8ubWFyY29AZ21haWwuY29tOjM2OXhsYnVqMjU='
		}
	}	
});

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