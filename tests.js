const fetchData = require("./index.js");

async function main() {
  try {
    // const requiredOptions = ['online', 'maxplayers', 'version', 'favicon','response'];
    // Options: ['online', 'maxplayers', 'version', 'favicon','response']
    const requiredOptions = ["online"];
    const minecraftData = await fetchData(requiredOptions);
    console.dir(minecraftData);
  } catch (error) {
    console.error(`Error al obtener datos de Minecraft API: ${error.message}`);
  }
}

main();
