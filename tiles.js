let titles = 
    [
    { "rotation": 0, "invert": false, "variant": 1, "points": [1, 0, 0, 0, 0, 0], "dots": [1, 0, 0, 0, 0, 0] },
    { "rotation": 1, "invert": false, "variant": 1, "points": [0, 1, 0, 0, 0, 0], "dots": [0, 1, 0, 0, 0, 0] },
    { "rotation": 2, "invert": false, "variant": 1, "points": [0, 0, 1, 0, 0, 0], "dots": [0, 0, 1, 0, 0, 0] },
    { "rotation": 3, "invert": false, "variant": 1, "points": [0, 0, 0, 1, 0, 0], "dots": [0, 0, 0, 1, 0, 0] },
    { "rotation": 4, "invert": false, "variant": 1, "points": [0, 0, 0, 0, 1, 0], "dots": [0, 0, 0, 0, 1, 0] },
    { "rotation": 5, "invert": false, "variant": 1, "points": [0, 0, 0, 0, 0, 1], "dots": [0, 0, 0, 0, 0, 1] },

    { "rotation": 0, "invert": true, "variant": 1, "points": [0, 1, 1, 1, 1, 1], "dots": [1, 0, 0, 0, 0, 0] },
    { "rotation": 1, "invert": true, "variant": 1, "points": [1, 0, 1, 1, 1, 1], "dots": [0, 1, 0, 0, 0, 0] },
    { "rotation": 2, "invert": true, "variant": 1, "points": [1, 1, 0, 1, 1, 1], "dots": [0, 0, 1, 0, 0, 0] },
    { "rotation": 3, "invert": true, "variant": 1, "points": [1, 1, 1, 0, 1, 1], "dots": [0, 0, 0, 1, 0, 0] },
    { "rotation": 4, "invert": true, "variant": 1, "points": [1, 1, 1, 1, 0, 1], "dots": [0, 0, 0, 0, 1, 0] },
    { "rotation": 5, "invert": true, "variant": 1, "points": [1, 1, 1, 1, 1, 0], "dots": [0, 0, 0, 0, 0, 1] },


    { "rotation": 0, "invert": false, "variant": 2, "points": [1, 0, 1, 0, 0, 0], "dots": [1, 0, 1, 0, 0, 0] },
    { "rotation": 1, "invert": false, "variant": 2, "points": [0, 1, 0, 1, 0, 0], "dots": [0, 1, 0, 1, 0, 0] },
    { "rotation": 2, "invert": false, "variant": 2, "points": [0, 0, 1, 0, 1, 0], "dots": [0, 0, 1, 0, 1, 0] },
    { "rotation": 3, "invert": false, "variant": 2, "points": [0, 0, 0, 1, 0, 1], "dots": [0, 0, 0, 1, 0, 1] },
    { "rotation": 4, "invert": false, "variant": 2, "points": [1, 0, 0, 0, 1, 0], "dots": [1, 0, 0, 0, 1, 0] },
    { "rotation": 5, "invert": false, "variant": 2, "points": [0, 1, 0, 0, 0, 1], "dots": [0, 1, 0, 0, 0, 1] },

    { "rotation": 0, "invert": true, "variant": 2, "points": [0, 1, 0, 1, 1, 1], "dots": [1, 0, 1, 0, 0, 0] },
    { "rotation": 1, "invert": true, "variant": 2, "points": [1, 0, 1, 0, 1, 1], "dots": [0, 1, 0, 1, 0, 0] },
    { "rotation": 2, "invert": true, "variant": 2, "points": [1, 1, 0, 1, 0, 1], "dots": [0, 0, 1, 0, 1, 0] },
    { "rotation": 3, "invert": true, "variant": 2, "points": [1, 1, 1, 0, 1, 0], "dots": [0, 0, 0, 1, 0, 1] },
    { "rotation": 4, "invert": true, "variant": 2, "points": [0, 1, 1, 1, 0, 1], "dots": [1, 0, 0, 0, 1, 0] },
    { "rotation": 5, "invert": true, "variant": 2, "points": [1, 0, 1, 1, 1, 0], "dots": [0, 1, 0, 0, 0, 1] },


    { "rotation": 0, "invert": false, "variant": 3, "points": [1, 0, 1, 0, 1, 0], "dots": [1, 0, 1, 0, 1, 0] },
    { "rotation": 1, "invert": false, "variant": 3, "points": [0, 1, 0, 1, 0, 1], "dots": [0, 1, 0, 1, 0, 1] },

    { "rotation": 0, "invert": true, "variant": 3, "points": [0, 1, 0, 1, 0, 1], "dots": [1, 0, 1, 0, 1, 0] },
    { "rotation": 1, "invert": true, "variant": 3, "points": [1, 0, 1, 0, 1, 0], "dots": [0, 1, 0, 1, 0, 1] },


    { "rotation": 0, "invert": false, "variant": 4, "points": [1, 0, 0, 1, 0, 0], "dots": [1, 0, 0, 1, 0, 0] },
    { "rotation": 1, "invert": false, "variant": 4, "points": [0, 1, 0, 0, 1, 0], "dots": [0, 1, 0, 0, 1, 0] },
    { "rotation": 2, "invert": false, "variant": 4, "points": [0, 0, 1, 0, 0, 1], "dots": [0, 0, 1, 0, 1, 0] },

    { "rotation": 0, "invert": true, "variant": 4, "points": [0, 1, 1, 0, 1, 1], "dots": [1, 0, 0, 1, 0, 0] },
    { "rotation": 1, "invert": true, "variant": 4, "points": [1, 0, 1, 1, 0, 1], "dots": [0, 1, 0, 0, 1, 0] },
    { "rotation": 2, "invert": true, "variant": 4, "points": [1, 1, 0, 1, 1, 0], "dots": [0, 0, 1, 0, 0, 1] },


    { "rotation": 0, "invert": false, "variant": 5, "points": [1, 1, 0, 0, 0, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 1, "invert": false, "variant": 5, "points": [0, 1, 1, 0, 0, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 2, "invert": false, "variant": 5, "points": [0, 0, 1, 1, 0, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 3, "invert": false, "variant": 5, "points": [0, 0, 0, 1, 1, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 4, "invert": false, "variant": 5, "points": [0, 0, 0, 0, 1, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 5, "invert": false, "variant": 5, "points": [1, 0, 0, 0, 0, 1], "dots": [0, 0, 0, 0, 0, 0] },

    { "rotation": 0, "invert": true, "variant": 5, "points": [0, 0, 1, 1, 1, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 1, "invert": true, "variant": 5, "points": [1, 0, 0, 1, 1, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 2, "invert": true, "variant": 5, "points": [1, 1, 0, 0, 1, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 3, "invert": true, "variant": 5, "points": [1, 1, 1, 0, 0, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 4, "invert": true, "variant": 5, "points": [1, 1, 1, 1, 0, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 5, "invert": true, "variant": 5, "points": [0, 1, 1, 1, 1, 0], "dots": [0, 0, 0, 0, 0, 0] },


    { "rotation": 0, "invert": false, "variant": 6, "points": [1, 1, 0, 1, 1, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 1, "invert": false, "variant": 6, "points": [0, 1, 1, 0, 1, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 2, "invert": false, "variant": 6, "points": [1, 0, 1, 1, 0, 1], "dots": [0, 0, 0, 0, 0, 0] },

    { "rotation": 0, "invert": true, "variant": 6, "points": [0, 0, 1, 0, 0, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 1, "invert": true, "variant": 6, "points": [1, 0, 0, 1, 0, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 2, "invert": true, "variant": 6, "points": [0, 1, 0, 0, 1, 0], "dots": [0, 0, 0, 0, 0, 0] },


    { "rotation": 0, "invert": false, "variant": 7, "points": [0, 0, 0, 0, 0, 0], "dots": [0, 0, 0, 0, 0, 0] },

    { "rotation": 1, "invert": true, "variant": 7, "points": [1, 1, 1, 1, 1, 1], "dots": [0, 0, 0, 0, 0, 0] },


    { "rotation": 0, "invert": false, "variant": 8, "points": [1, 1, 0, 1, 0, 0], "dots": [0, 0, 0, 1, 0, 0] },
    { "rotation": 1, "invert": false, "variant": 8, "points": [0, 1, 1, 0, 1, 0], "dots": [0, 0, 0, 0, 1, 0] },
    { "rotation": 2, "invert": false, "variant": 8, "points": [0, 0, 1, 1, 0, 1], "dots": [0, 0, 0, 0, 0, 1] },
    { "rotation": 3, "invert": false, "variant": 8, "points": [1, 0, 0, 1, 1, 0], "dots": [1, 0, 0, 0, 0, 0] },
    { "rotation": 4, "invert": false, "variant": 8, "points": [0, 1, 0, 0, 1, 1], "dots": [0, 1, 0, 0, 0, 0] },
    { "rotation": 5, "invert": false, "variant": 8, "points": [1, 0, 1, 0, 0, 1], "dots": [0, 0, 1, 0, 0, 0] },

    { "rotation": 0, "invert": true, "variant": 8, "points": [0, 0, 1, 0, 1, 1], "dots": [0, 0, 0, 1, 0, 0] },
    { "rotation": 1, "invert": true, "variant": 8, "points": [1, 0, 0, 1, 0, 1], "dots": [0, 0, 0, 0, 1, 0] },
    { "rotation": 2, "invert": true, "variant": 8, "points": [1, 1, 0, 0, 1, 0], "dots": [0, 0, 0, 0, 0, 1] },
    { "rotation": 3, "invert": true, "variant": 8, "points": [0, 1, 1, 0, 0, 1], "dots": [1, 0, 0, 0, 0, 0] },
    { "rotation": 4, "invert": true, "variant": 8, "points": [1, 0, 1, 1, 0, 0], "dots": [0, 1, 0, 0, 0, 0] },
    { "rotation": 5, "invert": true, "variant": 8, "points": [0, 1, 0, 1, 1, 0], "dots": [0, 0, 1, 0, 0, 0] },


    { "rotation": 0, "invert": false, "variant": 9, "points": [1, 1, 0, 0, 1, 0], "dots": [0, 0, 0, 0, 1, 0] },
    { "rotation": 1, "invert": false, "variant": 9, "points": [0, 1, 1, 0, 0, 1], "dots": [0, 0, 0, 0, 0, 1] },
    { "rotation": 2, "invert": false, "variant": 9, "points": [1, 0, 1, 1, 0, 0], "dots": [1, 0, 0, 0, 0, 0] },
    { "rotation": 3, "invert": false, "variant": 9, "points": [0, 1, 0, 1, 1, 0], "dots": [0, 1, 0, 0, 0, 0] },
    { "rotation": 4, "invert": false, "variant": 9, "points": [0, 0, 1, 0, 1, 1], "dots": [0, 0, 1, 0, 0, 0] },
    { "rotation": 5, "invert": false, "variant": 9, "points": [1, 0, 0, 1, 0, 1], "dots": [0, 0, 0, 1, 0, 0] },

    { "rotation": 0, "invert": true, "variant": 9, "points": [0, 0, 1, 1, 0, 1], "dots": [0, 0, 0, 0, 1, 0] },
    { "rotation": 1, "invert": true, "variant": 9, "points": [1, 0, 0, 1, 1, 0], "dots": [0, 0, 0, 0, 0, 1] },
    { "rotation": 2, "invert": true, "variant": 9, "points": [0, 1, 0, 0, 1, 1], "dots": [1, 0, 0, 0, 0, 0] },
    { "rotation": 3, "invert": true, "variant": 9, "points": [1, 0, 1, 0, 0, 1], "dots": [0, 1, 0, 0, 0, 0] },
    { "rotation": 4, "invert": true, "variant": 9, "points": [1, 1, 0, 1, 0, 0], "dots": [0, 0, 1, 0, 0, 0] },
    { "rotation": 5, "invert": true, "variant": 9, "points": [0, 1, 1, 0, 1, 0], "dots": [0, 0, 0, 1, 0, 0] },


    { "rotation": 0, "invert": false, "variant": 10, "points": [1, 1, 1, 0, 0, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 1, "invert": false, "variant": 10, "points": [0, 1, 1, 1, 0, 0], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 2, "invert": false, "variant": 10, "points": [0, 0, 1, 1, 1, 0], "dots": [0, 0, 0, 0, 0, 0] },

    { "rotation": 0, "invert": true, "variant": 10, "points": [0, 0, 0, 1, 1, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 1, "invert": true, "variant": 10, "points": [1, 0, 0, 0, 1, 1], "dots": [0, 0, 0, 0, 0, 0] },
    { "rotation": 2, "invert": true, "variant": 10, "points": [1, 1, 0, 0, 0, 1], "dots": [0, 0, 0, 0, 0, 0] },


    { "rotation": 0, "invert": false, "variant": 11, "points": [1, 1, 1, 0, 1, 0], "dots": [0, 0, 0, 0, 1, 0] },
    { "rotation": 1, "invert": false, "variant": 11, "points": [0, 1, 1, 1, 0, 1], "dots": [0, 0, 0, 0, 0, 1] },
    { "rotation": 2, "invert": false, "variant": 11, "points": [1, 0, 1, 1, 1, 0], "dots": [1, 0, 0, 0, 0, 0] },
    { "rotation": 3, "invert": false, "variant": 11, "points": [0, 1, 0, 1, 1, 1], "dots": [0, 1, 0, 0, 0, 0] },
    { "rotation": 4, "invert": false, "variant": 11, "points": [1, 0, 1, 0, 1, 1], "dots": [0, 0, 1, 0, 0, 0] },
    { "rotation": 5, "invert": false, "variant": 11, "points": [1, 1, 0, 1, 0, 1], "dots": [0, 0, 0, 1, 0, 0] },

    { "rotation": 0, "invert": true, "variant": 11, "points": [0, 0, 0, 1, 0, 1], "dots": [0, 0, 0, 0, 1, 0] },
    { "rotation": 1, "invert": true, "variant": 11, "points": [1, 0, 0, 0, 1, 0], "dots": [0, 0, 0, 0, 0, 1] },
    { "rotation": 2, "invert": true, "variant": 11, "points": [0, 1, 0, 0, 0, 1], "dots": [1, 0, 0, 0, 0, 0] },
    { "rotation": 3, "invert": true, "variant": 11, "points": [1, 0, 1, 0, 0, 0], "dots": [0, 1, 0, 0, 0, 0] },
    { "rotation": 4, "invert": true, "variant": 11, "points": [0, 1, 0, 1, 0, 0], "dots": [0, 0, 1, 0, 0, 0] },
    { "rotation": 5, "invert": true, "variant": 11, "points": [0, 0, 1, 0, 1, 0], "dots": [0, 0, 0, 1, 0, 0] },


    { "rotation": 0, "invert": false, "variant": 12, "points": [1, 0, 1, 0, 1, 0], "dots": [0, 1, 0, 0, 1, 0] },
    { "rotation": 1, "invert": false, "variant": 12, "points": [0, 1, 0, 1, 0, 1], "dots": [0, 0, 1, 0, 0, 1] },
    { "rotation": 2, "invert": false, "variant": 12, "points": [1, 0, 1, 0, 1, 0], "dots": [1, 0, 0, 1, 0, 0] },
    { "rotation": 3, "invert": false, "variant": 12, "points": [0, 1, 0, 1, 0, 1], "dots": [0, 1, 0, 0, 1, 0] },
    { "rotation": 4, "invert": false, "variant": 12, "points": [1, 0, 1, 0, 1, 0], "dots": [0, 0, 1, 0, 0, 1] },
    { "rotation": 5, "invert": false, "variant": 12, "points": [0, 1, 0, 1, 0, 1], "dots": [1, 0, 0, 1, 0, 0] }
]