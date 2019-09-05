module.exports = class Teaser1 {
    use() {
        return {
            "title": "Best Roasters",
            "description": "Check out these great underground coffee shops.",
            "linkURL": "/content/wknd/en/restaurants/best-roasters.html",
            "actionsEnabled": true,
            "imageLinkHidden": false,
            "titleLinkHidden": false,
            "actions": [{
                "title": "Read More",
                "url": "/content/wknd/en/restaurants/best-roasters.html"
            }],
            imageResource: {
                src: "assets/roaster-image.jpeg",
                widths: [300, 500, 800, 1000, 1200]
}
        };

    }
};