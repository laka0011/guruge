function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('stEmail').value;
    window.location.href = `homePage.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
}

function resetForm() {
    document.getElementById('welcomeForm').reset();
}