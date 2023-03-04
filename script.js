//your code here
var user;
 async function getRadomUser() {
	const response = await fetch('https://randomuser.me/api/');
	 const data = await response.json();
	  user = data.results[0];
	 displayUser(user);
}

function displayUser(user){
document.getElementById('fullname').innerText = `${user.name.first} ${user.name.last}`
}
	
function showAge(){
	document.getElementById('showDetails').innerText = `${user.registered.age}`
}
	
function showEmail(){
	document.getElementById('showDetails').innerText = `${user.email}`
}
	
function showPhone(){
	document.getElementById('showDetails').innerText = `${user.phone}`
}
	
function showGetUser(){
	document.getElementById('showDetails').innerText = "";
	 getRadomUser()
	for(let i=1;i<user.length;i++){
		document.getElementById('showChange_img').src = `${user.picture.medium}`
	}
	// document.getElementById('showChange_img').src = `${user.picture.medium`
	
}


getRadomUser();
