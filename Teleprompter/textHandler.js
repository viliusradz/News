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

    constructor() {
        this.someArray = []
        this.moveSpeed = 10;
        this.x = 0;
        this.y = 0;
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
        const baseCont = document.getElementById("textBounds")
        let height = 0;
        for (let iter of this.textObjects)
        {
            const parag = document.createElement("p")
            const node = document.createTextNode(iter["text"]);
            parag.appendChild(node);
            parag.style.padding = 1000;
            baseCont.appendChild(node);
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
        //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.inputUpdateMethods.forEach(method => {
            method()
        });

    }

    onResize(args)
    {
        //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        console.log(args)
        this.onResizeUpdateMethods.forEach(method => {method()})
    }

    drawBox(width = 100, height = 100) {
        this.ctx.fillRect(this.x, this.y, width, height);
    }


}