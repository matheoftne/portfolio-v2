const form = document.querySelector('form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

function sendEmail() {
    const body = `Nom: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "matheo.fontaine.pro@gmail.com",
        Password : "B6DB6E5D3E0B652F80E8E06C586144678F7A",
        To : 'matheo.fontaine.pro@gmail.com',
        From : "matheo.fontaine.pro@gmail.com",
        Subject : subject.value,
        Body : body
    }).then(
      message => {
        if (message == 'OK') {
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent!",
                icon: "success"
            });
        } 
      }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
})