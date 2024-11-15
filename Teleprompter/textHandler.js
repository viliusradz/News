// exports makes the class visible in other files (like public)


import {Color} from "./utils.js";

export function createTextObject(text, foreColor, backColor, fontSize)
{
    return {
        text: text,
        foreColor: foreColor,
        backColor: backColor,
        fontSize: fontSize
    }
}

export class TextHandler {
    inputUpdateMethods = []
    onResizeUpdateMethods = []
    textObjects;

    constructor(canvas) {
        this.someArray = []
        this.moveSpeed = 10;
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        document.addEventListener("keydown", (args) => this.keyboardEventHandler(args))
        window.addEventListener("resize", (args)=> this.onResize(args))
    }

    initBox(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.drawBox(width, height);
        this.inputUpdateMethods.push(() => this.drawBox());
    }

    initText(textObjects) {
        let a = {
            foreColor: new Color(0,0,0),
            backColor: new Color(0,0,0),
            text:"",
            fontSize: 20
        }

        this.textObjects = textObjects;
        this.inputUpdateMethods.push(() => this.drawText());
        this.drawText();
        this.onResizeUpdateMethods.push(() => this.drawText());
    }

    drawText() {
        for (let iter of this.textObjects)
        {
            this.ctx.font = "48px serif";
            console.log(iter);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillText(iter["text"],window.innerWidth/5,50);
        }
    }


    keyboardEventHandler(args) {
        // box Movement
        switch (args.key) {
            case "ArrowDown":
                this.y += this.moveSpeed;
                break;
            case "ArrowUp":
                this.y -= this.moveSpeed;
                break;
            case "ArrowLeft":
                this.x -= this.moveSpeed;
                break;
            case "ArrowRight":
                this.x += this.moveSpeed;
                break;
        }
        this.inputUpdateMethods.forEach(method => {
            method()
        });

    }

    onResize(args)
    {
        console.log(args)
        this.onResizeUpdateMethods.forEach(method => {method()})
    }

    drawBox(width = 100, height = 100) {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.ctx.fillRect(this.x, this.y, width, height);
    }


}