var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
myRequest.onload();
	var data = JSON.parse(myRequest.responseText);
		console.log(data[0]);
		
myRequest.send();
