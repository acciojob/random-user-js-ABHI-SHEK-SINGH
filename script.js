//your code here
  function getRadomUser() {
	const response = await fetch('https://randomuser.me/api/');
	 const data = await response.json();
	 const user = data.results[0];
	 displayUser(user);
}

function displayUser(user){
document.getElementById('fullname').innerText = `${user.name.first} ${user.name.last}`

document.getElementById('age').innerText = `${user.registered.age}`
	document.getElementById('email').innerText = 
	document.getElementById('phone')
}
getRadomUser();
