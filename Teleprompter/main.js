import {createTextObject, TextHandler} from "./textHandler.js"
import {Color} from "./utils.js"

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
    //textHandler.initBox(10,10, 50,50)
    textHandler.initText([createTextObject(
        "This is a text paragraph",
        new Color(255, 20, 100),
        new Color(10, 10, 10),
        20
        )]);
}


window.addEventListener("DOMContentLoaded", initialize);