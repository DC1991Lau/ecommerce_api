const express = require("express");
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");

const { userById } = require("../controllers/user");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
	res.json({
		user: req.profile
	});
});

//iguala req.profile ao userId
router.param("userId", userById);

module.exports = router;
