import { Request, Response } from 'express';
const { Answer } = require('../db/index');

async function getAnswers (req: Request, res: Response) {
    try {
        const answers = await Answer.findAll();

        (answers.length === 0) 
            ? res.status(404).json({ message: 'Answers Not Found' })
            : res.status(200).json(answers);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAnswers,
};