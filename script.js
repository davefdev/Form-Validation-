//select the form elements
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


//event listener when the form is submitted
form.addEventListener('submit', e => {
	//stops form from default action
    e.preventDefault();
    //runs checkInputs function below
    checkInputs();
});

function checkInputs() {
	//access the value of each form element and trim method to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	

    //if statements to validate each form element

    //validate username, if = empty 
	if (usernameValue === '') {
        //run the seterror function below, with username and messege passed in
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        //check against email validator below that characters are email addresses
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if (password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}
//when it fails validation run this function
function setErrorFor(input, message) {
	//access parent element of the input
    const formControl = input.parentElement;
	const small = formControl.querySelector('small');
    //change the parent element to red css
	formControl.className = 'form-control error';
	small.innerText = message;
}

//when its valid, run this function
function setSuccessFor(input) {
	const formControl = input.parentElement;
    //turn the element green
	formControl.className = 'form-control success';
}
	
//email validator check its valid and not just empty
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});