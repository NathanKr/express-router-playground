const express = require('express')

const router = express.Router();

router.get('/',(req,res) => {
    res.send("put here all your users")
})

// --------- put here all rest api related to users

module.exports = router;