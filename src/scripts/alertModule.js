// alertModule.js
const AlertTypes = {
    SUCCESS: 'success',
    ERROR: 'error',
};

const showAlert = (type, message) => {
    const alertDiv = document.getElementById('alert');
    const alertIcon = document.getElementById('alert-icon');
    const alertText = document.getElementById('alert-text');
    const dismissBtn = document.getElementById('dismiss-btn');

    // Set icon and text based on the type
    if (type === AlertTypes.SUCCESS) {
        alertIcon.src = '/assests/icons/success.svg';
        alertDiv.classList.add('bg-green-500');
    } else if (type === AlertTypes.ERROR) {
        alertIcon.src = '/assests/icons/error.svg';
        alertDiv.classList.add('bg-red-500');
    }

    alertText.textContent = message;

    // Show the alert with Alpine.js and Tailwind CSS transitions
    alertDiv.classList.remove('hidden');
    alertDiv.setAttribute('x-data', '{ open: true }');
    alertDiv.setAttribute('x-show', 'open');
    alertDiv.setAttribute('x-transition:enter', 'transition-transform transform opacity ease-out duration-300');
    alertDiv.setAttribute('x-transition:leave', 'transition-transform transform opacity ease-in duration-300');

    // Dismiss button click event
    const handleDismiss = () => {
        alertDiv.setAttribute('x-show', 'open');
        setTimeout(() => {
            alertDiv.classList.add('hidden');
            alertDiv.setAttribute('x-data', '{ open: false }');
        }, 300);
    };

    dismissBtn.addEventListener('click', handleDismiss);
};

export { AlertTypes, showAlert };
