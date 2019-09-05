const fs = require('fs');
const glob = require("glob");
const concat = require('concat');
const path = require('path');

const {
  Compiler,
  Runtime
} = require('@adobe/htlengine');
const outputDir = './dist'

//to automate including all property object
let payload = require("./collateProperties.js");
//console.log(payload);
/* let CollateTemlpate = require("./collateTemplate.js");
CollateTemlpate.do().then(
console.log("template created")); */
let globOptions = {};
globOptions.root = './src/main/webpack'
let tmpDir = './tmp/';
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir);
}
let templates = glob.sync('**/*tpl.html', globOptions);
//console.log("templat list retrieved");
concat(templates, tmpDir + 'templates.html').then(function (result) {
  console.log("concat file created");
  let tempArr = [];
  tempArr.push('./html/index.html');
  tempArr.push(tmpDir + 'templates.html');
  concat(tempArr, tmpDir + 'finaltemplate.html').then(function (result) {
    const compiler = new Compiler()
      .withOutputDirectory(outputDir)
      .withRuntimeVar(Object.keys(payload));

    // let template = fs.readFileSync('./structure/header.html','utf-8');
  //  console.log(compiler);
    const runtime = new Runtime()
      //  .withUseDirectory(path.join(__dirname, 'specs'))
      //.withResourceDirectory(path.join(__dirname, 'specs'))
      .setGlobal(payload);

    const compilePromise = compiler.compileFile('./tmp/finaltemplate.html', 'home.js')
    //const compilePromise = compiler.compileFile('./content/carousel.html', 'carousel.js')
    compilePromise.then(compiledFilename => {
      const service = require(compiledFilename);
      service(runtime).then((output) => {

    //    console.log(output);
        fs.writeFileSync('./dist/home.html', output);
      }).catch(err => {
        console.error(err);
      });
    }).catch(err => {
      console.error(err);
    });
    //const compileTemplate = await compiler.compileToString(template);
    //console.log(compileTemplate); 
  });

});
/* 
const compiler = new Compiler()
    .withOutputDirectory(outputDir)
    .withRuntimeVar(Object.keys(payload));

// let template = fs.readFileSync('./structure/header.html','utf-8');
console.log(compiler);
const runtime = new Runtime()
  //  .withUseDirectory(path.join(__dirname, 'specs'))
    //.withResourceDirectory(path.join(__dirname, 'specs'))
    .setGlobal(payload);

const compilePromise = compiler.compileFile('./structure/base-page.html', 'home.js')
//const compilePromise = compiler.compileFile('./content/carousel.html', 'carousel.js')
compilePromise.then(compiledFilename => {
    const service = require(compiledFilename);
    service(runtime).then((output) => {
        
        console.log(output);
        fs.writeFileSync('./generated-html/home.html',output);
    }).catch(err => {
        console.error(err);
      });
}).catch(err => {
    console.error(err);
  });
//const compileTemplate = await compiler.compileToString(template);
//console.log(compileTemplate); */