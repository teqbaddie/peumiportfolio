
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pelumiteejay@elasticemail.com",
    Password : "A38D49C1D3F318BBBE2443DDE21CC188FB47",
    To : 'pelumiolaiya1403@gmail.com',
    From :  "pelumiteejay@elasticemail.com",
    Subject : "Message From My Portfolio Website",
    Body : "Name: " + document.getElementById("name").value
               + " <br> Email: " + document.getElementById("email").value
               + " <br> Subject: " + document.getElementById("subject").value
               + " <br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Your message has been sent successfully, I will reach out to you soon!")
);
    }


