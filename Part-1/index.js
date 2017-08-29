const bp = require('body-parser');

const exp = require('express');

const port = process.env.PORT || 3001;

const api = exp();

// api.use(bp.urlencoded({extended: false}));
api.use(bp.json());

api.get('/api/days/:day', (req, res) => {
    res.contentType('application/text');
    const daysOfWeek = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7
    }
    const day = req.params.day.toLowerCase();


    if (daysOfWeek[day]) {
        res.json(daysOfWeek[day]);
    } else {
        res.status(400).send(`${day} is not a valid day!`);
    }

});

api.post('/api/array/concat', (req, res) => {
    res.contentType('application/JSON');
    const array1 = req.body.array1;
    const array2 = req.body.array2;
    if (Array.isArray(array1) && Array.isArray(array2)) {


        res.json({
            "result": array1.concat(array2)
        });
    } else {
        console.log(typeof array1, 'array 1');
        res.status(400).send({
            "error": "Input data should be of type Array."
        });
    }
});

api.listen(port, function() {
    console.log(`Listening on http://localhost:${port}...`);
});
