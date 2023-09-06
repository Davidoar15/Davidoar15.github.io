import { Request, Response } from 'express';
const { Answer } = require('../db/index');

async function getAnswerbyId (req: Request, res: Response) {
    const answerId = req.params.id;

    try {
        const answer = await Answer.findByPk(answerId);

        (!answer) 
            ? res.status(404).json({ message: 'Answer Not Found' })
            : res.status(200).json(answer);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAnswerbyId,
};