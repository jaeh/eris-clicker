/* 
 * makes the pages of the book on http://principiadiscordia.com clickable to switch to the next page.
 * 
 * put this script in your browser console and press run (tested on firefox),
 * afterwards you can click the page (white area) to switch it to the next highest page
 */

var pathname = window.location.pathname;

function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var table = document.getElementsByTagName('table')[2];

function funcCall (evt) {
    var harr = pathname.split('/');
    var herr = harr[2].split('.');
    herr[0] = parseInt(herr[0]) + 1;
    herr = herr.join('.');
    harr[2] = herr;
    harr = harr.join('/');
    var html = httpGet(harr);
    var body = document.getElementsByTagName('body')[0];
    body.innerHTML = html;
    pathname = harr;
    
    var table = document.getElementsByTagName('table')[2];
    table.addEventListener('click', funcCall);
}

table.addEventListener('click', funcCall);
