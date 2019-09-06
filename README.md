The project is to demonstrate how to use htl for frontend development. 
In this project 
-	Front End devs have their own code base
o	Code base uses HTL for HTML generation
o	Uses JS/CSS minification
o	Webpack to serve html static site for hot UI dev changes
-	MVN build in place to pull the latest js/css minify it and put it into AEM code base as part of build process

For trying out the front dev, you would need Nodejs and npm installed.
After cloning the repository, under ui.frontend folder run the below commands to start the static site

-	npm install
-	npm start

And for deploying the complete AEM package along with js/css code at the root folder
-	mvn clean install –PautoInstallPackage 


WKND site is used as the reference for the UI development. As of now only WKND home page has been setup for frontend development.

ui.frontend 
  - dist    --> folder used to serve the front-end dev files
  - html    --> 
    - assets                  --> images used by dev pages
    - clientlib-dependencies  --> CQ clientlib dependency of AEM (jquery)
    - content                 --> json used by the components to serve the content
    - index_properties        --> json properties which are passed (usually useful for global items)
    - index.html              --> the html page which gets served
  - scripts --> 
    --collateProperties.js    --> used to combine all the index properties and used for template to render
    --collateTemplates.js     --> due to current bug https://github.com/adobe/htlengine/issues/86 not able include the template, so combining all templates
    --index.js                --> script which initiates the compiling the htl templates
  - src/main/webpack   
    -- base --> contains the js and css file
    -- site --> contains the js and css file 
    -- components --> sightly comopnents 
    -- core --> core sightly comopnents 
    -- templates/base.html --> reference 
  - tmp                       --> temporary folder used for template manuplation
  
 
To start frontend development run the below command inside ui.frontend
  -- npm install
  -- npm start

To install the corresponding aem package install the below
  -- mvn clean install -PautoInstallPackage
