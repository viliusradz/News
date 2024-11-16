import {download, loadFile} from "./utils.js";

export class Speakers {
    speakerData = [];
    selectedSpeaker = null;

    textData = [
        {
            name: "Rat Problem",
            paragraphs:
                [
                    {
                        speakerName: "Josh",
                        paragraphContent: "Hallo"
                    }
                ]
        }
    ];
    selectedScenario = null;

    constructor() {
    }

    async loadSpeakers(path = "../SaveData/speakers.json") {
        this.speakerData = await loadFile(path);
    }

    saveSpeakers() {
        const output = JSON.stringify(this.speakerData);
        download("speakers.json", output);
    }

    initSpeakerCreator() {
        document.getElementById("createConfigButton").addEventListener("click", () => this.createNewSpeaker());
        document.getElementById("saveSpeakers").addEventListener('click', () => this.saveSpeakers());

    }

    initParagraphCreator() {

        for (const speaker of this.speakerData) {
            this.addSpeakerItem(speaker)
        }
        for (const speaker of this.textData) {
            this.addScenarioItem(speaker)
        }
        document.getElementById("addParButton").addEventListener("click", () => this.createNewParagraph());
        document.getElementById("createScenario").addEventListener('click', () => this.createScenario());
        document.getElementById("saveScenarios").addEventListener('click', () => this.saveScenarios());
    }

    createNewSpeaker() {
        const name = document.getElementById("nameInput").value;
        console.log(name)
        const foreground = document.getElementById("foreColor").children;
        const background = document.getElementById("backColor").children;
        const font = document.getElementById("fontSize").value;

        const speakerObj =
            {
                name: name,
                foreColor: {
                    r: foreground[0].value,
                    g: foreground[1].value,
                    b: foreground[2].value,
                    a: foreground[3].value,
                },
                backColor: {
                    r: background[0].value,
                    g: background[1].value,
                    b: background[2].value,
                    a: background[3].value,
                },
                fontSize: font
            };
        this.speakerData.push(speakerObj);
        this.addSpeakerItem(speakerObj)
    }

    addSpeakerItem(speakerObj) {
        const speakerSelector = document.getElementById("speakerSelector");
        const item = document.createElement("button")
        item.textContent = speakerObj.name;
        item.addEventListener('click', () => {
            this.selectedSpeaker = speakerObj.name;
            console.log("changed speaker", speakerObj.name)
        });
        speakerSelector.appendChild(item);
    }

    async loadScenarios(path = "../SaveData/scenarios.json") {
        this.textData = await loadFile(path);
    }

    async saveScenarios() {
        const output = JSON.stringify(this.textData);
        download("scenarios.json", output);
    }

    createNewParagraph() {
        if (this.selectedScenario === null || this.selectedSpeaker === null)
            return;
        let result = this.textData.findIndex(
            (x) => x.name === this.selectedScenario);
        if (result === -1)
            return;
        const paragraphContent = document.getElementById("paragraphContent").value;
        const parObj =
            {
                speakerName: this.selectedSpeaker,
                paragraphContent: paragraphContent
            };
        console.log(parObj);
        this.textData[result].paragraphs.push(parObj);
    }

    createScenario() {
        const scenarioName = document.getElementById("scenarioName").value;
        if (scenarioName.length === 0)
            return;
        const newScenario = {
            name: scenarioName,
            paragraphs: []
        };
        this.textData.push(newScenario);
        this.addScenarioItem(newScenario)
        this.selectedScenario = newScenario.name;
    }

    addScenarioItem(scenarioItem, itemHolder = "scenarioSelector") {
        const scenarioSelector = document.getElementById(itemHolder);
        const item = document.createElement("button")
        item.textContent = scenarioItem.name;
        item.addEventListener('click', () => {
            this.selectedScenario = scenarioItem.name;
            console.log("changed scenario", scenarioItem.name)
        });
        scenarioSelector.appendChild(item);
    }

    getSelectedScenario()
    {
        if (this.selectedScenario === null)
            return null;
        let result = this.textData.findIndex(
            (x) => x.name === this.selectedScenario);
        if (result === -1)
            return null;

        return this.textData[result];
    }
    getSpeakerStyle(name)
    {
        console.log(this.speakerData)
        if(this.speakerData === [])
            return;
        let result = this.speakerData.findIndex(
            (x) => x.name === name);
        if (result === -1)
            return;

        return this.speakerData[result];
    }
}
