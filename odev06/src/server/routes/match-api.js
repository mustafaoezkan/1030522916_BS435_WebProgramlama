const express = require('express');

const router = express.Router();

router.get('/matches', (req, res) => {
    if (!req.user) {
        res.status(401).send();
        return;
    }
    const payload = {
        "name": "Test"
    }
    res.status(200).json(payload);
});

module.exports = router;