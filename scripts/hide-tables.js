let tablesToHide = document.getElementsByClassName("table");
let lecturesButton = document.getElementById("lectures");
let isVisible = true;

document.getElementById("lectures").addEventListener("click", (event) =>
{
    if (isVisible)
    {
        for (let i = 0; i < tablesToHide.length; i++)
        {
            tablesToHide[i].classList.add("hide");
        }
        isVisible = false;
    }
    else
    {
        for (let i = 0; i < tablesToHide.length; i++)
        {
            tablesToHide[i].classList.remove("hide");
        }
        isVisible = true;
    }
})