document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        
        let isValid = true; 
        
        if (passwordInput.value.length < 8) {
            passwordInput.style.borderColor = "red";
            isValid = false;
            alert('Kata Sandi harus memiliki minimal 8 karakter');
        } else {
            passwordInput.style.borderColor = ""; 
        }
        
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.style.borderColor = "red";
            isValid = false;
            alert('Konfirmasi Kata Sandi tidak cocok');
        } else {
            confirmPasswordInput.style.borderColor = ""; 
        }
            
        const inputs = [nameInput, emailInput, passwordInput];
        for (let input of inputs) {
            if (input.value === "") {
                input.style.borderColor = "red"; 
                isValid = false; 
                alert('Isian ' + input.name + ' tidak boleh kosong'); 
                break; 
            } else {
                input.style.borderColor = ""; 
            }
        }
        
        if (isValid) {
            alert("Pendaftaran berhasil!"); 
        }
    });
});
