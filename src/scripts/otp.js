import { AlertTypes, showAlert, dismissAlertByCode } from './alertModule.js';

const OTPinputs = document.querySelectorAll('input');
const button = document.querySelector('#verify-button');
let countdown = 30; // Initial countdown value
let countdownInterval; // Interval variable

const resendButton = document.getElementById('resend-otp');
const counterSpan = document.getElementById('counter');
const resendButtonTitle = document.getElementById('resend-otp-title');

window.onload = () => OTPinputs[0].focus();

function getOtp() {
    let enteredOTP = "";
    OTPinputs.forEach((input) => {
        enteredOTP += input.value;
    });
    return enteredOTP;
}

window.handleOTP = function() {
    console.log("Verify OTP: ", getOtp());
    // Replace this with your OTP verification logic
    if (getOtp() === "1234") {
        showAlert(AlertTypes.SUCCESS, 'تم تسجيل الدخول بنجاح');
    } else {
        showAlert(AlertTypes.ERROR, 'خطأ في التحقق من البريد الإلكتروني');
    }
}

window.resendOTP = function() {
    console.log("Resend OTP Function");
}

function checkOTP() {
    dismissAlertByCode();
    let enteredOTP = getOtp();
    if (enteredOTP.length === 4) {
        button.disabled = false; 
    } else {
        button.disabled = true; 
    }
}

OTPinputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        const currentInput = input;
        const nextInput = currentInput.nextElementSibling;

        if (currentInput.value.length > 1 && currentInput.value.length == 2) {
            currentInput.value = currentInput.value.charAt(0); // Keep only the first character
        }

        if (nextInput !== null && nextInput.hasAttribute('disabled') && currentInput.value !== "") {
            nextInput.removeAttribute('disabled');
            nextInput.focus();
        }
        checkOTP();
    });

    input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        let currentIndex = index;

        // Distribute the pasted characters to the input fields
        for (let i = 0; i < pastedText.length; i++) {
            if (currentIndex < OTPinputs.length) {
                OTPinputs[currentIndex].value = pastedText.charAt(i);
                OTPinputs[currentIndex].removeAttribute('disabled');
                currentIndex++;
            }
        }

        checkOTP();
    });

    input.addEventListener('keyup', (e) => {
        if (e.key == "Backspace") {
            if (input.previousElementSibling != null) {
                e.target.value = "";
                e.target.setAttribute("disabled", true);
                input.previousElementSibling.focus();
                checkOTP();
            }
        }
    });
});

// Function to update the countdown and check if it reaches 0
function updateCounter() {
    countdown--;
    counterSpan.textContent = `${countdown} ثانية`;

    if (countdown <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        resendButton.disabled = false; // Enable the button
        resendButtonTitle.textContent = "";
        counterSpan.textContent = "إعادة ارسال الكود";
    }
}

// Function to start the countdown
function startCountdown() {
    countdownInterval = setInterval(updateCounter, 1000); // Update every 1 second
}

// Call the startCountdown function to initiate the countdown
startCountdown();