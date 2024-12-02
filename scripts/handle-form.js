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
class formData
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
        console.log('name: ${this.name}');
        console.log('email: ${this.email}');
        console.log('phone number: ${this.phoneNumber}');
        console.log('country: ${this.country}');
        console.log('date: ${this.date}');
        console.log('comment: ${this.comment}');
    }

    static validatePhoneNumber(phoneNumber)
    {

    }

    static submit()
    {

    }
}

form = document.querySelector('form');

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    console.log('form submitted');
})