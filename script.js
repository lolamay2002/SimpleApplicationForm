<!DOCTYPE html>
<html>
<head>
    <title>Application Form</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Application Form</h1>
    <form action="submit.php" method="POST" onsubmit="return validateForm()">
        <!-- Personal Information -->
        <h2>Personal Information</h2>
        <label for="full-name">Full Name:</label>
        <input type="text" id="full-name" name="full-name" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required><br>

        <!-- ... (rest of the form fields) ... -->

        <!-- Submit Button -->
        <input type="submit" value="Submit">
    </form>

    <script>
        function validateForm() {
            // You can add your form validation logic here
            // For example, checking if the email is valid or if all required fields are filled
            // If validation passes, return true, otherwise return false to prevent form submission
            return true; // Change this to your validation logic
        }
    </script>
</body>
</html>
