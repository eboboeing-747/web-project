document.getElementById("open-form").addEventListener("click", function()
{
    document.getElementById("form-modal").classList.add("open");
})

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
