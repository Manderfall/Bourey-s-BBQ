const express = require("express");
const router = express.Router();

/* general */
router.get("/", (req, res) => {
	res.render("home");
});
/* ------------------ */


module.exports = router;