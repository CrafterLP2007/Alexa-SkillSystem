const fs = require("fs");
const path = require("path");

const skillPath = "./skills";
const command = "test";

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
                        const jsPath = path.join(skillPath, json.runFile);
                        //const jsPath = path.resolve(skillPath, json.runFile);
                        
                        console.log(jsPath);

                        eval(jsPath);
                        //import(jsPath);
                        //require(jsPath);
                    }
                } catch (err) {
                    console.log("Error while parsing json file: ", err);
                    commandFound = false;
                }
            });
        }
    });
});
