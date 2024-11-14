// exports makes the class visible in other files (like public)

export class TextHandler {
    inputUpdateMethods = []

    constructor(canvas) {
        this.someArray = []
        this.moveSpeed =10;
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        document.addEventListener("keydown", (args)=> this.keyboardEventHandler(args))
    }

    initBox(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.drawBox(width, height);
        this.inputUpdateMethods.push(()=> this.drawBox());
    }


    keyboardEventHandler(args) {
        // box Movement
        switch (args.key) {
            case "ArrowDown":
                this.y+=this.moveSpeed;
                break;
            case "ArrowUp":
                this.y-=this.moveSpeed;
                break;
            case "ArrowLeft":
                this.x-=this.moveSpeed;
                break;
            case "ArrowRight":
                this.x+=this.moveSpeed;
                break;
        }
        this.inputUpdateMethods.forEach(method => {method()});

    }

    drawBox(width = 100, height = 100) {
        this.ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
        this.ctx.fillRect(this.x, this.y, width, height);
    }


}