# Alexa Skill Manager Documentation

This documentation provides an overview of the Alexa Skill Manager and describes how to use it with a sample skill. The sample skill is defined in a JSON file and includes attributes such as name, description, authors, version, commands, and a run file. The run file, written in CommonJS (CJS) format, contains two methods: onEnable and onDisable. Danger. This SkillSystem is only for [CyanCrafting-VoiceAssistant](https://github.com/CyanCrafting-Projects)!

## Skill Definition

```json
{
  "name": "test",
  "description": "A test skill",
  "authors": [
    "CrafterLP_2K7",
    "RealZone22"
  ],
  "version": "1.0.0",
  "commands": [
    "test",
    "skill"
  ],
  "runFile": "test.cjs"
}
```

- **name**: The name of the skill ("test" in this case).
- **description**: A brief description of the skill ("A test skill" in this case).
- **authors**: An array of authors who created the skill (["CrafterLP_2K7", "RealZone22"] in this case).
- **version**: The version number of the skill ("1.0.0" in this case).
- **commands**: An array of commands associated with the skill (["test", "skill"] in this case).
- **runFile**: The name of the run file that contains the implementation logic for the skill ("test.cjs" in this case).

# Run File

The run file, written in CommonJS (CJS) format, provides the implementation logic for the skill. It includes the following methods:

```javascript
let onEnable = function() {
  doSomething();
}

let onDisable = function() {
  doSomething();
}

module.exports = { onEnable, onDisable };
```

- **onEnable**: This method is called when the skill is enabled.
- **onDisable**: This method is called when the skill is disabled

### Informations

```You can modify the implementation logic of these methods based on your specific skill requirements.```

```Please note that the Alexa Skill Manager is a tool for managing Alexa skills, and this documentation provides a basic example to demonstrate its usage. You can extend and customize the skill and its implementation according to your needs.```