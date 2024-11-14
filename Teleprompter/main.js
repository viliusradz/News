import {TextHandler} from "./textHandler.js"

let canvas = null;
let textHandler = null;


function initialize()
{
    // assign events

    // setup environment
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // do drawing
    textHandler = new TextHandler(canvas);
    textHandler.initBox(10,10, 50,50)
}


window.addEventListener("DOMContentLoaded", initialize);