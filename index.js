const express = require('express');

const db = require('./data/helpers/carDb');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json('Testing first endpooint');
})

app.get('/cars', async (req, res) => {
    try {
        const cars = await db.get();
        if (cars) {
            res.status(201).json(cars);
        } else {
            res.status(404).json({
                message: 'Could not fetch cars from database'
            })
        }

    } catch (error) {
        res.status(501).json({
            error: error.message
        })
    }
})

app.get('/cars/:id', async (req, res) => {
    try {
        const car = await db.getById(req.params.id);
        if (car) {
            res.status(201).json(car);
        } else {
            res.status(404).json({
                message: 'Could not fetch car from database'
            })
        }

    } catch (error) {
        res.status(501).json({
            error: error.message
        })
    }
})


app.post('/cars', async (req, res) => {
    const { make, model, mileage, vin } = req.body;
    try {
        const car = await db.add({ make, model, mileage, vin });
        if (car) {
            res.status(201).json(car);
        } else {
            res.status(404).json({
                message: 'Could not add car to database'
            })
        }

    } catch (error) {
        res.status(501).json({
            error: error.message
        })
    }
})

app.put('/cars/:id', async (req, res) => {
    try {
        const car = await db.update(req.params.id, req.body);
        if (car) {
            res.status(201).json(car);
        } else {
            res.status(404).json({
                message: 'Could not fetch car from database'
            })
        }

    } catch (error) {
        res.status(501).json({
            error: error.message
        })
    }
})

app.delete('/cars/:id', async (req, res) => {
    try {
        const car = await db.getById(req.params.id);
        if (car) {
            const deleteCar = await db.deleteCar(req.params.id);
            res.status(201).json(deleteCar);
        } else {
            res.status(404).json({
                message: `Car with id ${id} does not exist. Cannot delete`
            })
        }

    } catch (error) {
        res.status(501).json({
            error: error.message
        })
    }
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});