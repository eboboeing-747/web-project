var isHidden = false;
var videos = document.getElementsByClassName("video");

function hideObjects(objects)
{
    isHidden = true;
    for (var object of objects)
    {
        object.classList.add('hide');
    }
}

function showObjects(objects)
{
    isHidden = false;
    for (var object of objects)
    {
        object.classList.remove('hide');
    }
}

document.getElementById("hide-video").addEventListener("click", function()
{
    if (isHidden)
    {
        showObjects(videos);
    }
    else
    {
        hideObjects(videos);
    }
})