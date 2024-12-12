var pfp = document.getElementById("pfp")
var isStudent = true;

function addSize(image, addWidth, addHeight)
{
    image.style.width = (image.width + addWidth).toString() + "px";
    image.style.height = (image.height + addHeight).toString() + "px";
}

/*document.getElementById("pfp").addEventListener("dblclick", event =>
{
    alert("double click");
})*/

pfp.addEventListener("mouseover", event =>
{
    addSize(pfp, 10, 10);
    pfp.style.margin = "0px";
})

pfp.addEventListener("mouseout", event =>
{
    addSize(pfp, -10, -10);
    pfp.style.margin = "5px";
})

pfp.addEventListener("click", event =>
{
    if (isStudent)
    {
        pfp.src = "../images/Onizuka.png";
        isStudent = false;
    }
    else
    {
        pfp.src = "../images/empty_pfp.png";
        isStudent = true;
    }
})