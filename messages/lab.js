function parse () {
//Creating the request
	request = new XMLHttpRequest();

	request.open("GET", "data.json", true);
	
	request.onreadystatechange = callme;

	request.send(null);

	function callme () {
		if (request.readyState === 4) {
			content = "";
			element = document.getElementById("messages");
			raw = request.responseText;
			msg = JSON.parse(raw);
			for (i = 0; i < msg.length; i++) {
				content += "<p>" + msg[i].content + '<span class = "author">' + msg[i].username + "</span></p>";
			}
			element.innerHTML = content;
		}
		else {
			document.getElementById("messages").innerHTML = "Fail!";
		}
	}
}