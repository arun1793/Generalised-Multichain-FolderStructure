var config = require('../config.json');
var multichainConfig = config.multichainConfig
let multichain = require("generalised-multichain-node")(multichainConfig);

/** @module READDATA*/
module.exports = {
    readData: readData
}

/** @function readData 
 * add patient record data into blockchain.
 */
function readData(args) {

    return new Promise((resolve) => {
        var response;
        var key = args;

        multichain.listStreamKeyItems({
            stream: "MedicalInfo",
            "key": key
        }, (err, res) => {
        
            if (err == null) {

                return resolve({
                    response: res
                });
            } else {
                console.log(err)
            }
        
        })

    })
}