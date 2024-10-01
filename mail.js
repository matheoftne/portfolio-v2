const form = document.querySelector('form');
const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

function sendEmail() {
    const body = `Nom: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        Host : process.env.HOST,
        Username : process.env.USERNAME,
        Password : process.env.PASSWORD,
        To : process.env.TO,
        From : process.env.FROM,
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