export{ }
const express = require('express');
const router = express.Router();

router.get('/', (req: Request, res: any) => {
    res.render('404')
})

module.exports = router;