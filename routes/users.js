const express = require('express')

const router = express.Router();

// '/' referes actually to /users as set in index.js
router.get('/',(req,res) => {
    res.send("put here all your users")
})

// --------- put here all rest api related to users

module.exports = router;