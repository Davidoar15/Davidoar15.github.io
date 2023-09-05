import { Request, Response } from 'express';
const { Answer } = require('../db/index');

async function putAnswer(req: Request, res: Response) {
    const AnswerId = req.params.id;
    const newAnswer = req.body;

    try {
        const answer = await Answer.findOne({
            where: { id: AnswerId }
        });

        if (!answer) {
            return res.status(404).json({ error: "Answer Not Found" })
        };

        await Answer.update(newAnswer, {
            where: { id: AnswerId }
        });

        const updatedCategory = await Answer.findOne({
            where: { id: AnswerId }
        });

        return res.status(200).json(updatedCategory);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    putAnswer,
};