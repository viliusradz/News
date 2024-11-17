import {createTextObject, TextHandler} from "./textHandler.js"
import {Speakers} from "./dataParser.js";

let textHandler = null;
let speakers = null;

function changeDisplayedText()
{
    if(speakers === null || textHandler === null)
        return;

    const scenario = speakers.getSelectedScenario();
    if(scenario == null)
        return;

    let pars = []
    for(const par of scenario.paragraphs)
    {
        const paragraphStyle = speakers.getSpeakerStyle(par.speakerName);
        console.log(par.speakerName)
        console.log(paragraphStyle);
        pars.push(createTextObject(par.paragraphContent, paragraphStyle.foreColor, paragraphStyle.backColor, paragraphStyle.fontSize));
    }
    textHandler.initText(pars);
}

async function initialize() {
    // assign events

    // setup environment
    //canvas = document.getElementById("canvas");
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;

    document.getElementById("scenarioSelector").addEventListener("click", async () => {changeDisplayedText()})

    // do drawing
    textHandler = new TextHandler();
    speakers = new Speakers()
    await speakers.loadSpeakers("./Scripts/SaveData/speakers.json");
    await speakers.loadScenarios("./Scripts/SaveData/scenarios.json");
    for (const speaker of speakers.textData) {
        speakers.addScenarioItem(speaker, "scenarioSelector")
    }

    //textHandler.initBox(10,10, 50,50)

}


window.addEventListener("DOMContentLoaded", initialize);