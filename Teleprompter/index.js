import {TextHandler} from "/textHandler"


function initialize()
{
    let handler = new TextHandler();
    handler.testMethod();
}


window.addEventListener("DOMContentLoaded", initialize);