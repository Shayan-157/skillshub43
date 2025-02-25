$(document).ready(function () {
    // Email Validation
    $('#email').on('blur', function () {
        var email = $(this).val();
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            $('#emailError').text('Please enter a valid email address.');
        } else {
            $('#emailError').text('');
        }
    });

    // Phone Number Masking
    $('#phone').on('input', function () {
        var input = $(this).val();
        input = input.replace(/\D/g, ''); // Remove non-numeric characters
        if (input.length <= 3) {
            $(this).val(input);
        } else if (input.length <= 6) {
            $(this).val(input.replace(/(\d{3})(\d{0,3})/, '($1) $2'));
        } else {
            $(this).val(input.replace(/(\d{3})(\d{3})(\d{0,4})/, '($1) $2-$3'));
        }
    });

    // Character Count for Text Area
    $('#comments').on('input', function () {
        var remainingChars = 200 - $(this).val().length;
        $('#charCount').text(remainingChars + ' characters remaining');
    });

    // Form Submission
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Perform validation before submitting
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var comments = $('#comments').val();

        if (!firstName || !lastName || !email || !phone || !comments) {
            alert('All fields must be filled out correctly.');
            return;
        }

        // Submit the form data (mocked)
        alert('Registration successful!');
    });
});
