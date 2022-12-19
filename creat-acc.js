const first = document.getElementById('firstname');
const sur = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const check = document.getElementById('check');
const gender = document.getElementById('radio');


const form = document.getElementById("form");
const errormsg = document.getElementById("errormsg");

form.addEventListener("submit", (ev) =>{
	const errors = [];

	//gender  
	  var radio = document.querySelector( 'input[name="gender"]:checked');  
	  if (radio === null){
		errors.push("Must be choosen gender");
		gender.style.color = "red";
	  } 

	//firstname
	if(first.value.trim() === ""){
		errors.push("Firstname cannot be blank");
		first.style.borderColor = "red";
	  }
	  if(first.value.length > 20){
		errors.push("Firstname must be less than 20 chars");
		first.style.borderColor = "red";
	  }
	
	  //surname
	  if(sur.value.trim() === ""){
		errors.push("Lastname cannot be blank");
		sur.style.borderColor = "red";
	  }
	  
	  if(sur.value.length > 30){
		errors.push("Lastname must be less than 30 chars");
		sur.style.borderColor = "red";
	  }

	  //email
	  if(email.value.trim() === ""){
		errors.push("Email cannot be blank");
		email.style.borderColor = "red";
		
	  }
	  if(!email.value.includes("@")){
		errors.push("Email cannot be blank");
		email.style.borderColor = "red";
	  }

	  //password
	if(password.value.trim() === ""){
		errors.push("Password cannot be blank");
		password.style.borderColor = "red";
	  }
	  if(password.value.length < 6 ){
		errors.push("password must be more than 6 chars");
		password.style.borderColor = "red";
	  }
	  if(password.value == password.value.toUpperCase() || password.value == password.value.toLowerCase()){
		errors.push("password must have at least 1 uppercase letter and 1 lowercase letter");
		password.style.borderColor = "red";
	  }

	  //checks
     if(!check.checked){
     errors.push("subscibe to our newsletter");
     check.style.color = "red";
      }
	  
	
	  if (errors.length > 0){
		ev.preventDefault();
		errormsg.toggleAttribute('hidden');
		errormsg.innerHTML = errors.join('; ');
	  }
	})