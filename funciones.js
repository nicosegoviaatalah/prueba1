
$(document).ready(function () {
    $('#btnEnviar').click(function () {
        // Get the value of the Rut field
        var rutValue = $('#txtRut').val().trim();

        // Perform validation
        if (rutValue === '') {
            // Rut field is empty, show error message or take appropriate action
            alert('Por favor, ingrese su Rut.');
            return false; // Prevent form submission
        } else if (rutValue.length < 9 || rutValue.length > 10) {
            // Rut field does not have between 9 and 10 characters
            alert('El Rut debe tener entre 9 y 10 caracteres.');
            return false; // Prevent form submission
        } else {
            // Rut field is valid
            console.log('Rut:', rutValue);
            // Proceed with form submission or other actions
        }
    });
});
