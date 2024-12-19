// animation play
function playSubmission(element)
{
    element.style.animationPlayState = "running";
}

// form open scripts
document.getElementById("open-form-business-website").addEventListener("click", function()
{
    document.getElementById("form-modal").classList.add("open");
})

document.getElementById("open-form-corporate-website").addEventListener("click", function()
{
    document.getElementById("form-modal").classList.add("open");
})

document.getElementById("open-form-webshop").addEventListener("click", function()
{
    document.getElementById("form-modal").classList.add("open");
})

// form close scripts
document.getElementById("close-form").addEventListener("click", function()
{
    document.getElementById("form-modal").classList.remove("open");
})

window.addEventListener('keydown', (e) =>
{
    if (e.key === "Escape")
    {
        document.getElementById("form-modal").classList.remove("open")
    }
})

document.querySelector("#form-modal .modal-content").addEventListener("click", event =>
{
    event._isClickWithInModal = true;
})

document.getElementById("form-modal").addEventListener("click", event => 
{
    if (event._isClickWithInModal)
    {
        return;
    }
    event.currentTarget.classList.remove("open")
})

// form submission
class FormData
{
    constructor(name, email, phoneNumber, country, date, comment)
    {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.date = date;
        this.comment = comment;
    }

    log()
    {
        console.log('name: ' + this.name);
        console.log('email: ' + this.email);
        console.log('phone number: ' + this.phoneNumber);
        console.log('country: ' + this.country);
        console.log('date: ' + this.date);
        console.log('comment: ' + this.comment);
    }

    static validatePhoneNumber(phoneNumber)
    {
        const phonePattern = /(\+)?[0-9]?[ _-]?\(?([0-9]{3})\)?[ _-]?([0-9]{3})[ _-]?([0-9]{2})[ _-]?([0-9]{2})/i;
        return phonePattern.test(phoneNumber);
    }

    static validateEmail(email)
    {
        const emailPattern = /[a-z0-9._%+-]+@([a-z0-9]+\.)+[a-z]+/i
        return emailPattern.test(email);
    }

    static submit()
    {
        
    }
}

form = document.querySelector('#contactForm');

form.addEventListener("submit", function(event)
{
    console.log("[submit] call");
    event.preventDefault();
    var name = form.elements['name'].value;
    var email = form.elements['email'].value;
    var phoneNumber = form.elements['phone'].value;
    var country = form.elements['country'].value;
    var date = form.elements['date'].value;
    var comment = form.elements['comment'].value;

    var isValid = true;
    var report = '';

    if (!FormData.validatePhoneNumber(phoneNumber))
    {
        isValid = false;
        report += 'failed to interpret \'' + phoneNumber + '\' as a phone number\n';
        console.log('phone invalid');
    }

    if (!FormData.validateEmail(email))
    {
        isValid = false;
        report += 'failed to interpret \'' + email + '\' as email';
        console.log('email invalid');
    }

    if (!isValid)
    {
        alert(report);
        return;
    }

    const formData = new FormData(name, email, phoneNumber, country, date, comment);
    formData.log();
    element = document.getElementById("modal-content")
    playSubmission(element);
})