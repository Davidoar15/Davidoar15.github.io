"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Answer } = require('../db/index');
function putAnswer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const AnswerId = req.params.id;
        const newAnswer = req.body;
        try {
            const answer = yield Answer.findOne({
                where: { id: AnswerId }
            });
            if (!answer) {
                return res.status(404).json({ error: "Answer Not Found" });
            }
            ;
            yield Answer.update(newAnswer, {
                where: { id: AnswerId }
            });
            const updatedCategory = yield Answer.findOne({
                where: { id: AnswerId }
            });
            return res.status(200).json(updatedCategory);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    });
}
;
module.exports = {
    putAnswer,
};
