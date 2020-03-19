
const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();

const UserSchema = require('../models/User')

const schema = Joi.object({
    name: Joi.string().required(),
    email:  Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

router.get('/', (req, res) => {
    res.send('OK');
});

router.post('/', async (req, res) => {

    try {
        const body = req.body;

        const {error} = schema.validate(body);        

        if (error) return res.status(400).send(`Body invalid: ${error.details[0].message}`);

        const user = await UserSchema.create(req.params);

        res.status(201).send({user})
    } catch {

    }
});



module.exports = router;