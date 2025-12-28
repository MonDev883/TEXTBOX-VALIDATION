function checkInput(){
	let value = document.getElementById("name").value;
	let message = document.getElementById("message");

	if(value === ""){
		message.textContent = "Please Fill Out this field";
		message.className = "message error";
	}
	else{
		message.textContent =" ✅ Input Received";
		message.className = " message success";
	}
}