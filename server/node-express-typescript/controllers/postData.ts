import { Request, Response } from 'express';
const { Answer } = require('../db/index');

async function postAnswer(req: Request, res: Response) {
    try {
        const { name, phone, date, language, howfound, newlettersub } = req.body;
        if (!name || !phone || !language || !howfound) {
            return res.status(401).send("Missing Data");
        }

        const newAnswer = await Answer.create({
            name,
            phone,
            date,
            language,
            howfound,
            newlettersub
        });

        return res.status(201).json(newAnswer);
    } catch(error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" })
    }
};

module.exports = {
    postAnswer,
};