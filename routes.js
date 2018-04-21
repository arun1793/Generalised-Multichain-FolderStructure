'use strict';

const addFunctionsValidation = require('./validations/addFunctionsValidation');
const readFunctionsValidation = require('./validations/readFunctionsValidation');
const cors = require('cors');
var path = require('path');
var express = require('express');
module.exports = router => {
    router.post("/addData", cors(), (req, res) => {

        addFunctionsValidation.addDataTestValidation(req, function(err, result) {
            
            if (err) {
                res.status(err.status).json({
                    message: err
                });
            } else {
                res.json({
                    status: result.status,
                    message: result.message
                });
            }
        });

    })

    router.post("/readData", cors(), (req, res) => {

        readFunctionsValidation.readDataTestValidation(req, function(err, result) {
            
            if (err) {
                res.status(err.status).json({
                    message: err
                });
            } else {
                res.json({
                    status: result.status,
                    data: result
                });
            }
        });

    })
}

