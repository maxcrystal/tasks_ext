const taskInput = document.getElementById('idInput');

// Set taskInput in focus
taskInput.focus();

// Add event listener to input field for Enter key press
taskInput.addEventListener("keyup", function(event) {
    // Check if the Enter key is pressed (key code 13)
    if (event.keyCode === 13) {
        window.open('https://portal.tokeon.ru/task/'+taskInput.value, '_blank');
    }
});