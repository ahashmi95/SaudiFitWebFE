import { AlertTypes, showAlert } from './alertModule.js';

window.handleLogin = function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember:', remember);

    // Simulating an error scenario
    showAlert(AlertTypes.ERROR, 'Login failed. Please check your credentials.');
    // Add your actual login logic here
};

window.handleLogin = function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const agree = document.getElementById('agree').checked;

    console.log('Email:', email); 
    console.log('Password:', password);
    console.log('Remember:', remember);

    // Simulating an error scenario
    showAlert(AlertTypes.SUCCESS, 'Login failed. Please check your credentials.');
    // Add your actual login logic here
};


window.handleResetPassowrd = function() {
    const email = document.getElementById('email').value;

    console.log('Email:', email);

    // Simulating an error scenario
    showAlert(AlertTypes.SUCCESS, 'Login failed. Please check your credentials.');
    // Add your actual login logic here
};

window.handleOTPConfirm = function() {
    const email = document.getElementById('email').value;

    console.log('Email:', email);

    // Simulating an error scenario
    showAlert(AlertTypes.SUCCESS, 'Login failed. Please check your credentials.');
    // Add your actual login logic here
};

window.handleNewPassword = function() {
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    // Simulating an error scenario
    showAlert(AlertTypes.SUCCESS, 'Login failed. Please check your credentials.');
    // Add your actual login logic here
};

window.handleProfileSave = function() {
    
}

window.profileCancel = function() {
    
}

window.uploadImage = function() {

}

window.removeImage = function() {

}