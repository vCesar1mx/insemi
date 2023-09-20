# INSEMI (INFORMATION SERVER MINECRAFT)

This is a Node.js module that allows to get Minecraft server information from various API endpoints.
## Example of usage

```javascript
const fetchData = require('./index.js');

async function main() {
    try {
        // Specify the required options you want to get from the Minecraft API.
        // Available options: ['online', 'maxplayers', 'version', 'favicon', 'response']
        const requiredOptions = ['online'];
        const minecraftData = await fetchData(requiredOptions);
        console.dir(minecraftData);
    } catch (error) {
        console.error(`Error retrieving data from Minecraft API: ${error.message}`);
    }
}

main();
Installation
You can install this module through npm:

npm install insemi
Usage
fetchData(required)
Main function to obtain data from the Minecraft server.

required (Array): An array of options to get from the Minecraft API.
Options: ['online', 'maxplayers', 'version', 'favicon', 'response']
Returns an object with the requested Minecraft server data.


Example

const fetchData = require('minecraft-api-fetcher');

async function main() {
    try {
        // Specify the required options you want to get from the Minecraft API.
        // Available options: ['online', 'maxplayers', 'version', 'favicon', 'response']
        const requiredOptions = ['online'];
        const minecraftData = await fetchData(requiredOptions);
        console.dir(minecraftData);
    } catch (error) {
        console.error(`Error retrieving data from Minecraft API: ${error.message}`);
    }
}

main();

Disclaimer: This module uses data from external sources and is subject to changes in those sources. The availability and accuracy of the data cannot be guaranteed.
```
