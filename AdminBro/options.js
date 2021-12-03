'use strict';

const fs = require('fs');
const path = require('path');


let resources = fs.readdirSync(path.join(__dirname, "resources"))
.filter(file => {
    return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js')
})
.flatMap(file=>{
    // console.log(file);
    return require(path.join(__dirname, "resources" ,file));
})

console.log(resources);
module.exports = {
    "resources": 
        resources
    ,
    "rootPath": '/admin',
}