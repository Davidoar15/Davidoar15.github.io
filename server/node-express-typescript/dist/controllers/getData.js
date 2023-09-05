"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require('../data');
function getDataForm(req, res) {
    try {
        const items = data.default.items;
        return res.status(200).json(items);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
;
module.exports = {
    getDataForm,
};
