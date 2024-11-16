// exports makes the class visible in other files (like public)


import {Color, wait} from "./utils.js";
import {fontSize as globalFontSize} from "./globalSettings.js";

export function createTextObject(text, foreColor, backColor, fontSize)
{
    return {
        text: text,
        foreColor: new Color(parseFloat(foreColor.r), parseFloat(foreColor.g), parseFloat(foreColor.b), parseFloat(foreColor.a)),
        backColor: new Color(parseFloat(backColor.r), parseFloat(backColor.g), parseFloat(backColor.b), parseFloat(backColor.a)),
        fontSize: fontSize
    }
}

export class TextHandler {
    inputUpdateMethods = []
    onResizeUpdateMethods = []
    textObjects;
    constructor() {
        this.someArray = []
        this.moveSpeed = 0;
        this.x = 0;
        this.y = 0;
        this.doScroll = true;
        this.scrollPercentage = 0;
        document.addEventListener("keydown", (args) => this.keyboardEventHandler(args))
        document.addEventListener("mousedown", (args) => this.mouseEventHandler(args))
        document.addEventListener("wheel", (args) => {this.scrollPercentage += args.deltaY *0.5 / window.innerHeight})
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
       // this.inputUpdateMethods.push(() => this.drawText());
        this.clearText()
        this.drawText();
        //this.onResizeUpdateMethods.push(() => this.drawText());
        window.requestAnimationFrame(()=> this.scroll());

    }

    clearText()
    {
        const baseCont = document.getElementById("textBounds")
        baseCont.textContent = '';
    }

    drawText() {
        const baseCont = document.getElementById("textBounds")
        for (let iter of this.textObjects)
        {
            console.log(iter)
            const parag = document.createElement("p")
            const node = document.createTextNode(iter.text);
            parag.appendChild(node);
            parag.className = "textBlockStyle";
            parag.style.color = iter.foreColor.getHexString();
            parag.style.background = iter.backColor.getHexString();
            parag.style.fontSize =  (globalFontSize * iter.fontSize).toString()+"em";
            baseCont.appendChild(parag);
        }
    }

    scroll()
    {
        if(!this.doScroll)
            return;

        let totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollPercentage += this.moveSpeed*0.0001;
        if(this.scrollPercentage < 0)
            this.scrollPercentage = 0;
        else if(this.scrollPercentage > 1)
            this.scrollPercentage = 1;
        let newScrollTop = this.scrollPercentage * totalScrollableHeight;
        window.scrollTo({
            top: newScrollTop,
        });
        window.requestAnimationFrame(()=> this.scroll())
    }


    keyboardEventHandler(args) {
        // box Movement
        switch (args.key) {
            case " ":
                args.preventDefault()
                console.log("HI")
                this.doScroll = !this.doScroll;
                break;

        }
        this.scroll();
        //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.inputUpdateMethods.forEach(method => {
            method()
        });

    }

    onResize(args)
    {
        //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.onResizeUpdateMethods.forEach(method => {method()})
    }

    drawBox(width = 100, height = 100) {
        this.ctx.fillRect(this.x, this.y, width, height);
    }


    mouseEventHandler(args) {
        args.preventDefault()
        if(args.button === 4) {
            this.moveSpeed++;
            console.log(this.moveSpeed);
        }
        else if(args.button === 3)
            this.moveSpeed--;


    }
}