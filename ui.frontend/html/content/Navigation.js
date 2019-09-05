module.exports = class Navigation {
    use() {

        return {
            items: [{
                URL: "restaurants.html",
                level: 0,
                active: false,
                title: "Restaurants",
                children:[]
            }, {
                URL: "bars.html",
                level: 0,
                active: false,
                title: "Bars",
                children: []
            }, {
                URL: "sports.html",
                level: 0,
                active: false,
                title: "Sports",
                children:[]
            }, {
                URL: "arts.html",
                level: 0,
                active: false,
                title: "Arts",
                children:[]
            }, {
                URL: "music.html",
                level: 0,
                active: false,
                title: "Music",
                children:[]
            }, {
                URL: "shopping.html",
                level: 0,
                active: false,
                title: "Shopping",
                children:[]
            }
        ]

        };
    }
};