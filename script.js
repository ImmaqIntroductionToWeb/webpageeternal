// List of valid emails, passwords, and their respective pages
const validUsers = {
    "pmhlanga20@gmail.com": {
        password: "0614388483",
        redirectUrl: "https://immaqintroductiontoweb.github.io/webpageeternal/Paula-Playist.html"
    },
    "amandamutheiwana.am@gmail.com": {
        password: "Mazekeen2012",
        redirectUrl: "https://immaqintroductiontoweb.github.io/webpageeternal/AmandaPlayist.html"
    }
};

// Function to validate login credentials
function validatelogin() {
    // Get the email and password entered by the user
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Log the email and password for debugging (optional)
    console.log(`Entered Email: ${email}, Entered Password: ${password}`);

    // Check if email exists and password matches
    if (validUsers[email] && validUsers[email].password === password) {
        // Redirect user to their specific page
        window.location.href = validUsers[email].redirectUrl;
    } else {
        // Show an error message for incorrect credentials
        alert("Invalid email or password. Please try again.");
    }
}



