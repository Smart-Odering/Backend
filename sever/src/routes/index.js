"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.main);
router.get("/home", ctrl.output.home);

module.exports = router;