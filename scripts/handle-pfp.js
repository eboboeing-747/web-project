var pfp = document.getElementById("pfp")
var isStudent = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addSize(image, addWidth, addHeight)
{
    image.style.width = (image.width + addWidth).toString() + "px";
    image.style.height = (image.height + addHeight).toString() + "px";
}

/*document.getElementById("pfp").addEventListener("dblclick", event =>
{
    alert("double click");
})*/

async function pause()
{
    await sleep(900);
    pfp.style.animationPlayState = "paused";
}

async function play()
{
    pfp.style.animationPlayState = "initial";
    setTimeout(pause, 0);
}

pfp.addEventListener("mouseenter", event =>
{
    play();
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