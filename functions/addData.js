'use strict';

var bcSdk = require('../sdk/invoke');

/**
 * A module that will add data into the blockchain!
 * @module addData
 */
/** Add Data into blockchain.*/
exports.addData = (key, value) => {
    return new Promise((resolve, reject) => {
        const addData = ({
            key: key,
            value: value,

        });

        bcSdk.addData({
            addData: addData
        })
            .then(function (result) {

                    return resolve({
                        "status": 200,
                        "message": "Your Information is stored into blockchain"
                    })
                
            })
            .catch(err => {


                reject({
                    "status": 500,
                    "message": 'Something went wrong please try again later!!'
                });

            });
    });
}