export class Color {
    constructor(r, g, b, a = 1) {

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    getHexString(backgroundColor)
    {
        return 'rgba('+this.r+', '+this.g+', '+this.b+','+this.a+')';
    }
}

export function wait(ms)
{
    let start = new Date().getTime();
    let end = start;
    while(end < start+ms)
    {
        end = new Date().getTime();
    }
}