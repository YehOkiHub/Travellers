const connection = require("./../connection/connection");
const locations = require("./Location");

const {Location} = require("./../models/index");

async function run(){
    await connection.sync({
        force: true
    })
    await Location.destroy({
        where: {}
    })
    await Location.bulkCreate(locations)

    console.log("seed completed")
    process.exit(0)


}

run()