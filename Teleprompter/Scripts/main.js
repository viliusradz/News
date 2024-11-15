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
        "R: *inaudible whisper* ... There was a fish in the percolator.\n",
        new Color(255, 255, 255),
        new Color(255, 10, 10, 0),
        3
        ), createTextObject(
            "A: *nudge*",
        new Color(100,255,255),
        new Color(10,100,10, 1),
        3
    ),
        createTextObject(
            "R: Backed by the European Union, NASA has unveiled their magnum opus now dubbed Project Europa. If successful, this one-time, irreversible space operation will completely isolate the problem by relocating the continent to Jupiter. So for everybody watching at home, rest assured, this global threat will soon cease to exist.\n",
            new Color(50, 170, 200),
            new Color(150, 170, 10, 0),
            1
        ),
        createTextObject(
            "R: Backed by the European Union, NASA has unveiled their magnum opus now dubbed Project Europa. If successful, this one-time, irreversible space operation will completely isolate the problem by relocating the continent to Jupiter. So for everybody watching at home, rest assured, this global threat will soon cease to exist.\n",
            new Color(50, 170, 200),
            new Color(150, 170, 10, 0),
            1
        ),
        createTextObject(
            "R: Backed by the European Union, NASA has unveiled their magnum opus now dubbed Project Europa. If successful, this one-time, irreversible space operation will completely isolate the problem by relocating the continent to Jupiter. So for everybody watching at home, rest assured, this global threat will soon cease to exist.\n",
            new Color(50, 170, 200),
            new Color(150, 170, 10, 0),
            1
        ),
        createTextObject(
            "R: Backed by the European Union, NASA has unveiled their magnum opus now dubbed Project Europa. If successful, this one-time, irreversible space operation will completely isolate the problem by relocating the continent to Jupiter. So for everybody watching at home, rest assured, this global threat will soon cease to exist.\n",
            new Color(50, 170, 200),
            new Color(150, 170, 10, 0),
            4
        )
    ]);
}


window.addEventListener("DOMContentLoaded", initialize);