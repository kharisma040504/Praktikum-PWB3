document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const inputs = [
            document.getElementById('name'),
            document.getElementById('email'),
            document.getElementById('password')
        ];
        
        let isValid = true; 

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
