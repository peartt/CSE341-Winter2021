const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = {
    "avengers": [
        {
            "name": "Tony Stark"
        },
        {
            "name": "Steve Rogers"
        },
        {
            "name": "Thor Odinson"
        },
        {
            "name": "Bruce Banner"
        },
        {
            "name": "Natasha Romanova"
        },
        {
            "name": "Clint Barton"
        }
    ]
};

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.get('/', (req, res, next) => {
    res.render('pages/ta10', {
        title: 'Team Activity 10',
        path: '/teamActivities/10',
    });
});


router.post('/insert', (req, res, next) => {
/************************************************
 * INSERT YOUR WEB ENDPOINT CODE HERE
 ************************************************/
    var newName = req.body.newName;
    var unique = true;
    var dataL = dummyData.avengers.length;
    // console.log(dummyData.avengers);
    // console.log(newName);
    // console.log(dummyData.avengers[0]);
    for (var i = 0; i < dataL; i++) {
        if (dummyData.avengers[i].name === newName) {
            unique = false;
        }
    }
    if (unique) {
        dummyData.avengers.push({
            name: newName
        });
    }
    // console.log(unique);
    // console.log(dummyData);
    res.json(dummyData);
});

module.exports = router;