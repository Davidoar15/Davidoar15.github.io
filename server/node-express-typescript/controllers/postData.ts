import { Request, Response } from 'express';
const { Answer } = require('../db/index');

async function postAnswer(req: Request, res: Response) {
    try {
        const { full_name, phone_number, start_date, preferred_language, how_found, newsletter_subscription } = req.body;
        if (!full_name || !phone_number || !preferred_language || !how_found) {
            return res.status(401).send("Missing Data");
        }

        const newAnswer = await Answer.create({
            full_name,
            phone_number,
            start_date,
            preferred_language,
            how_found,
            newsletter_subscription
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