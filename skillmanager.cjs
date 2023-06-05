const fs = require("fs");
const path = require("path");

const skillPath = "./skills/";
const command = "skill";

function loadSkills() {
    fs.readdir(skillPath, (err, files) => {
        if (err) {
            console.log("Error while reading skillpath: ", err);
            return;
        }

        files.forEach(file => {
            if (path.extname(file) === ".json") {
                const jsonPath = path.join(skillPath, file);

                fs.readFile(jsonPath, "utf8", (err, data) => {
                    if (err) {
                        console.log("Error while reading json file: ", err);
                        return;
                    }

                    try {
                        const json = JSON.parse(data);

                        if (json.commands.includes(command)) {
                            const skillFilePath = skillPath + json.runFile;
                            const skillModule = require(skillFilePath);
                            
                            if(typeof skillModule.onEnable === "function" && typeof skillModule.onDisable === "function") {
                                skillModule.onEnable();
                            } else {
                                console.log("Error: Can't find functions: 'onEnable()' and 'onDisable' in SkillModule: ", skillFilePath)
                                skillModule.onDisable();
                            }
                        }
                    } catch (err) {
                        console.log("Error while parsing json file: ", err);
                    }
                });
            }
        });
    });
}

loadSkills();


function unloadSkills() {
    fs.readdir(skillPath, (err, files) => {
        if (err) {
            console.log("Error while reading skillpath: ", err);
            return;
        }

        files.forEach(file => {
            if (path.extname(file) === ".json") {
                const jsonPath = path.join(skillPath, file);

                fs.readFile(jsonPath, "utf8", (err, data) => {
                    if (err) {
                        console.log("Error while reading json file: ", err);
                        return;
                    }

                    try {
                        const json = JSON.parse(data);

                        const skillFilePath = skillPath + json.runFile;
                        const skillModule = require(skillFilePath);
                            
                        skillModule.onDisable();
                    } catch (err) {
                        console.log("Error while parsing json file: ", err);
                    }
                });
            }
        });
    });
}