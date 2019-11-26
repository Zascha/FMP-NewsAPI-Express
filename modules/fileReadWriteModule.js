const fs = require('fs');

module.exports.readFromFile = function (fileName, callback) {
    var jsonData = fs.readFileSync(fileName);
    return JSON.parse(jsonData);
}

module.exports.writeToFile = function(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
}