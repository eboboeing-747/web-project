// 1. find <h4> and replace its text with 'welcome to our site'
// 2. change its color to red
// 3. find <p> and replace its text with 'this is new paragraph text'
// 4. make video.display = none

function getUTMData()
{
    var data = {};
    const url = window.location.href;
    const lowerBorder = url.indexOf('?');

    if (lowerBorder == -1)
    {
        return data;
    }

    const utm = url.substring(lowerBorder + 1, url.length).split('&');

    utm.forEach((element) => 
    {
        var temp = element.split('=');
        data[temp[0]] = temp[1];
    })
    
    return data;
}

var stage_h = 0;
headerToModify = document.querySelector('h4');
const text_h = headerToModify.textContent;

function rename_h(elementToModify)
{
    elementToModify.textContent = 'welcome to our site';
}

function recolor_h(elementToModify)
{
    elementToModify.classList.add('color')
}

function restore_h(elementToModify)
{
    elementToModify.textContent = text_h;
    elementToModify.classList.remove('color');
}

const actions_h = [rename_h, recolor_h, restore_h];

document.getElementById("foo-h-button").addEventListener("click", function()
{
    actions_h[stage_h](headerToModify);
    stage_h++;
    if (stage_h >= actions_h.length)
    {
        stage_h = 0;
    }
})

var stage_p = 0;
paragraphToModify = document.querySelector('p');
text_p = paragraphToModify.textContent;

function rename_p(elementToModify)
{
    elementToModify.textContent = 'this is new paragraph text';
}

function restore_p(elementToModify)
{
    elementToModify.textContent = text_p;
    elementToModify.classList.remove('color');
}

actions_p = [rename_p, restore_p];

document.getElementById("foo-p-button").addEventListener("click", function()
{
    actions_p[stage_p](paragraphToModify);
    stage_p++;
    if (stage_p >= actions_p.length)
    {
        stage_p = 0;
    }
})