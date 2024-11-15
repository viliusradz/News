import {createTextObject, TextHandler} from "./textHandler.js"
import {Color} from "./utils.js"

let canvas = null;
let textHandler = null;


function initialize()
{
    // assign events

    // setup environment
    //canvas = document.getElementById("canvas");
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;

    // do drawing
    textHandler = new TextHandler();
    //textHandler.initBox(10,10, 50,50)
    textHandler.initText([createTextObject(
        "This is a text paragraph that is very very long, or is going to be very very long, so so long",
        new Color(255, 20, 100),
        new Color(10, 10, 10),
        20
        ), createTextObject(
            "Test two",
        new Color(10,10,10),
        new Color(10,10,10),
        20
    )]);
}


window.addEventListener("DOMContentLoaded", initialize);