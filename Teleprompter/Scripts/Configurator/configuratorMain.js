import {Speakers} from "../dataParser.js";

async function initialize() {
    const speakers = new Speakers();
    await speakers.loadSpeakers();
    await speakers.loadScenarios();
    speakers.initSpeakerCreator();
    speakers.initParagraphCreator();
}




document.addEventListener("DOMContentLoaded", () =>initialize())