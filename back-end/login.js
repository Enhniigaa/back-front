import express from "express";
import fs from "fs";
const router = express.Router()

router.use((req, res) => {
    res.status(200).json({ "message": "Hello" });
})

export default router;
// module.exports = router;