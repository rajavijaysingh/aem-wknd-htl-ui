module.exports = class Carousel {
    use() {
        return {
            "jcr:primaryType": "nt:unstructured",
            "jcr:createdBy": "admin",
            "jcr:lastModifiedBy": "admin",
            "jcr:created": "Wed Apr 17 2019 15:36:28 GMT-0700",
            "autopauseDisabled": false,
            "delay": 5000,
            "jcr:lastModified": "Wed Apr 17 2019 15:47:01 GMT-0700",
            "sling:resourceType": "wknd/components/content/carousel",
            "autoplay": false,
            "cq:styleIds": [
                "1555545421827"
            ],
            "items": [
                {
                    "jcr:title":"LA Skateparks",
                    "title": "Ultimate guide to LA Skateparks.",
                    "description": "Our ultimate list of the 10 best spots to get some skateboard action going in Los Angeles, including some spots that you might never heard about before.",
                    linkURL:"la-skateparks.html",
                    titleType:"H2",
                    titleLinkHidden:false,
                    actionsEnabled:true,
                    imageResource:{                        
                        src:"assets/skateboard-hero.jpeg",
                        lazyEnabled:false,
                        widths:[300,500,800,1000,1200],
                        "fileReference": "/content/dam/wknd/en/los-angeles/skateboard-hero.jpg",
                        uuid:"",
                        title:"",
                        alt:"",
                        link:"",
                        areas:[{
                            shape:"",
                            coordinates:"",
                            href:"",
                            target:"",
                            alt:"",
                            relativeCoordinates:""
                        }

                        ],
                        displayPopupTitle:false,
            
                    },
                    "actions": [
                        {
                            "URL": "la-skateparks.html",
                            "title": "Read More"
                        }
                    ]
                },
                {
                    "jcr:title":"Office",                    
                    "title": "Rethinking your Office Space.",
                    "description": "Update your home office with some new swag! Check out great styles from the local flea market.",
                    linkURL:"office-space.html",
                    titleType:"H2",
                    titleLinkHidden:false,
                    actionsEnabled:true,
                    imageResource:{
                        srcUriTemplate:"assets/desk-hero2{.width}.jpeg",
                        src:"assets/desk-hero2.jpeg",
                        lazyEnabled:false,
                        widths:[300,500,800,1000,1200],
                        "fileReference": "/content/dam/wknd/en/los-angeles/desk-hero2.jpg",
                        uuid:"",
                        title:"",
                        alt:"",
                        link:"",
                        areas:[{
                            shape:"",
                            coordinates:"",
                            href:"",
                            target:"",
                            alt:"",
                            relativeCoordinates:""
                        }

                        ],
                        displayPopupTitle:false,
            
                    },
                    "actions": [
                        {
                            "URL": "office-space.html",
                            "title": "Read More"
                        }
                    ]
                },
                {
                    "jcr:title":"Architecture",                    
                    "title": "Architecture Minimalism",
                    "description": "Visionary artist Aeric Stark brings an incredible contrast of white marble and cool architecture in this incredible exhibit.",
                    linkURL:"la-skateparks.html",
                    titleType:"H2",
                    titleLinkHidden:false,
                    actionsEnabled:true,
                    imageResource:{
                        src:"assets/architecture-hero.jpeg",
                        lazyEnabled:false,
                        widths:[300,500,800,1000,1200],
                        "fileReference": "/content/dam/wknd/en/los-angeles/architecture-hero.jpg",
                        uuid:"",
                        title:"",
                        alt:"",
                        link:"",
                        areas:[{
                            shape:"",
                            coordinates:"",
                            href:"",
                            target:"",
                            alt:"",
                            relativeCoordinates:""
                        }

                        ],
                        displayPopupTitle:false,
            
                    },
                    "actions": [
                        {
                            "URL": "architecture.html",
                            "title": "Read More"
                        }
                    ]
                }
            ]
        };
    }
};;