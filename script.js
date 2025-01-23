document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');
    // Add your JavaScript code here
});
const chatArea = document.getElementById('chat-area');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();

    if (userMessage) {
        appendMessage(userMessage, 'user');
        chatInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            appendMessage(getBotResponse(userMessage), 'bot');
        }, 1000);
    }
});

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function getBotResponse(userMessage) {
    if (userMessage.includes('παραγγελία')) {
        return 'Μπορείς να ελέγξεις την παραγγελία σου με τον κωδικό που έλαβες!';
    } else if (userMessage.includes('χρόνος παράδοσης')) {
        return 'Η παράδοση συνήθως διαρκεί 2-3 εργάσιμες ημέρες.';
    } else if (userMessage.includes('πληρωμή')) {
        return 'Δεχόμαστε πληρωμές μέσω πιστωτικής κάρτας, PayPal, και αντικαταβολής.';
    } else if (userMessage.includes('Έχω πρόβλημα με την παραγγελία')) {
        return 'Λυπάμαι που αντιμετωπίζεις πρόβλημα. Παρακαλώ επικοινώνησε με την υποστήριξη πελατών.';
    } else {
        return 'Συγγνώμη, δεν κατάλαβα. Μπορείς να επαναλάβεις;';
    }
}
