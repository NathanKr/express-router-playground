const express = require('express')

const router = express.Router();

// '/' referes actually to /filters as set in index.js
router.get('/',(req,res) => {
    res.send("put here all your filters")
})

// --------- put here all rest api related to filters

module.exports = router;