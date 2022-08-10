const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const { Salleryfilter, getById } = require("../controllers/sallery");

router.get("/salary", Salleryfilter);
router.get("/salary/:id", getById);

module.exports = router;
