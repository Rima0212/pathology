function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "rimapyne596@gmail.com",
        Password: "Gopal0212#",
        To: "rimapyne596@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Booking",
        Body: "Here got a message"
    }).then(
        message => alert(message)
    )
}