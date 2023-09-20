/**
 * Example of use
 * const fetchData = require('./index.js');
 * async function main() {
 *      try {
 *          // const requiredOptions = ['online', 'maxplayers', 'version', 'favicon','response'];
 *          // Options: ['online', 'maxplayers', 'version', 'favicon','response']
 *          const requiredOptions = ['online'];
 *          const minecraftData = await fetchData(requiredOptions);
 *          console.dir(minecraftData);
 *      } catch (error) {
 *          console.error(`Error al obtener datos de Minecraft API: ${error.message}`);
 *      }
 * }
 * 
 * main();
 * 
 * Main function* @param { Array } required - Input for options to return --- Avaliable: ['online', 'maxplayers', 'version', 'favicon', 'response']
 */
const axios = require('axios');

const apiEndpoints = {
    online: 'https://minecraft-api.com/api/ping/online/mc.haliacraft.com/25565/json',
    maxplayers: 'https://minecraft-api.com/api/ping/maxplayers/mc.haliacraft.com/25565/json',
    response: 'https://minecraft-api.com/api/ping/response/mc.haliacraft.com/25565/json',
    version: 'https://minecraft-api.com/api/ping/version/mc.haliacraft.com/25565/json',
    favicon: 'https://minecraft-api.com/api/ping/favicon/mc.haliacraft.com/25565/json',
};

async function fetchData(required) {
    const server = {};
    // server is the variable for return data to your app
    // Options: ['online', 'maxplayers', 'version', 'favicon','response']
    if (required === "" || required == [] || required.length < 1) required = ['online', 'maxplayers', 'version', 'favicon', 'response'];
    //console.log(required)
    for (const option of required) {
        const endpoint = apiEndpoints[option];

        if (!endpoint) {
            console.error(`Option Unknown: ${option}`);
            continue; // Ignore options unknown
        }

        try {
            const response = await axios.get(endpoint);
            server[option] = response.data[option];
        } catch (error) {
            console.error(`Error retrieving data from Minecraft API ${endpoint}: ${error.message}`);
            // Can manage errors here
        }
    }
    server.copyright = 'https://vcesar.katzellc.com - All rights reserverd.';
    return server;
}

module.exports = fetchData;