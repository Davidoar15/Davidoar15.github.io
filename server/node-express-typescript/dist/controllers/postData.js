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
function postAnswer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { full_name, phone_number, start_date, preferred_language, how_found, newsletter_subscription } = req.body;
            if (!full_name || !phone_number || !preferred_language || !how_found) {
                return res.status(401).send("Missing Data");
            }
            const newAnswer = yield Answer.create({
                full_name,
                phone_number,
                start_date,
                preferred_language,
                how_found,
                newsletter_subscription
            });
            return res.status(201).json(newAnswer);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    });
}
;
module.exports = {
    postAnswer,
};
