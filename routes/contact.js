const express = require("express");
const router = express.Router();

/* general */
router.get("/contact", (req, res) => {
	res.render("contact");
});
/* ------------------ */


module.exports = router;