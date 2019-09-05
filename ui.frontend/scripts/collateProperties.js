//var normalizedPath = require("path").join(__dirname, "html/index_properties");
let payload = {};
require("fs").readdirSync('./html/index_properties').forEach(function(file) {
    //console.log("./html/index_properties/" + file);
    Object.assign(payload,require("../html/index_properties/" + file));
});
module.exports=payload;