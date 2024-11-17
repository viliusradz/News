import speakerData from "./SaveData/speakers.json" with {type:"json"}
import scenarioData from "./SaveData/scenarios.json" with {type:"json"}


export class Color {
    constructor(r, g, b, a = 1) {

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    getHexString()
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

export function download(fileName, content)
{
    let element = document.createElement("a");
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

export async function loadFile(filePath) {
    console.log(speakerData)
    if(filePath.includes("speakers.json"))
        return speakerData;
    else
        return scenarioData;
}