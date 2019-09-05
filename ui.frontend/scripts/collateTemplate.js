const glob = require("glob");
const concat = require('concat');
const fs = require('fs');
const path = require('path');

class CollateTemlpate{
   static do(){
        let globOptions = {};
        globOptions.root='./src/main/webpack'
        let tmpDir = './tmp/';
        if (!fs.existsSync(tmpDir)){
            fs.mkdirSync(tmpDir);
        }
        let templates = glob.sync('**/*tpl.html',globOptions);
        console.log("templat list retrieved");
        return concat(templates,tmpDir+'templates.html').then(()=>{
            console.log("concat file created");
            let tempArr=[];
            tempArr.push('./html/index.html');
            tempArr.push(tmpDir+'templates.html');
            returnconcat(tempArr,tmpDir+'finaltemplate.html').then(()=>{
                return;
            });
    
        });
        
    }
}
module.exports= CollateTemlpate;