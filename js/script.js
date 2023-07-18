
//------- nav bar-----------//

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the visibility of the navbar links
  navbarLinks.classList.toggle('active');
});

// Add a click event listener to each navbar link
navbarLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    // Close the navbar when a link is clicked (optional)
    navbarLinks.classList.remove('active');
    
  });
});

//-----End Of Nav Bar---------//


//----- Message Function--------//

function Send(){
    let name  = document.getElementById("name").value;
    let email  = document.getElementById("email").value;
    let message  = document.getElementById("message").value;

    let body = "Name:" + name + "<br/> Email:" + email + "<br/>Message:" + message;
   
    Email.send({
        SecureToken : "cc819dab-724f-4d34-90c0-91bca01357ef",
        To : 'tsepophetla@gmail.com',
        From : "tsepophetla@gmail.com",
        Subject : "Message from Contact",
        Body : body
    }).then(function (message) {

        alert("Thank you for contacting me! I will get in touch as soon as possible.");

        document.getElementById("name").value = "";

        document.getElementById("email").value = "";

        document.getElementById("message").value = "";

    });

}