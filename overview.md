The project is to demonstrate how to use htl for frontend development. WKND site is used as the reference for the UI development. As of now only WKND home page has been setup for frontend development.

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
  
 
To start frontend development 
  -- npm install
  -- npm start
