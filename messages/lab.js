// Your JavaScript goes here...

//Creating the request
request = new XMLHttpRequest();

request.open("GET", "data.json", true);

request.onreadystatechange = callme;

request.send(null);

function callme {
	if (request.readystate == 4) {
		content = "";
		element = document.getElementById("messages")
		raw = request.responseText;
		messages = JSON.parse(raw);
		for (i=0; i<messages.length; i++) {
			content += "<p>" + messages[i].content'<span class = "author">' + messages[i].username + "</span></p>"
		}
		element.innerHTML = content;
	}
	else {
		document.getElementById.innerHTML = "Fail!";
	}
}