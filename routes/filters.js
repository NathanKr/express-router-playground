const express = require('express')

const router = express.Router();

router.get('/',(req,res) => {
    res.send("put here all your filters")
})

// --------- put here all rest api related to filters

module.exports = router;