const express = require("express");
const router = express.Router();

/* general */
router.get("/menu", (req, res) => {
	res.render("menu");
});
/* ------------------ */


module.exports = router;