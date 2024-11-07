// mobile nav open script
document.getElementById("open-mobile-nav").addEventListener("click", function()
{
    document.getElementById("mobile-nav-modal").classList.add("open");
})

// mobile nav close scripts
document.getElementById("close-mobile-nav").addEventListener("click", function()
{
    document.getElementById("mobile-nav-modal").classList.remove("open");
})

window.addEventListener('keydown', (e) =>
{
    if (e.key === "Escape")
    {
        document.getElementById("mobile-nav-modal").classList.remove("open")
    }
})

document.querySelector("#mobile-nav-modal .mobile-modal-content").addEventListener("click", event =>
{
    event._isClickWithInModal = true;
})

document.getElementById("mobile-nav-modal").addEventListener("click", event => 
{
    if (event._isClickWithInModal)
    {
        return;
    }
    event.currentTarget.classList.remove("open")
})
