const express = require("express");
const patientsController = require("../controllers/patients");

const router = express.Router();

/* GET users listing. */
router.get("/", patientsController.getAll);

module.exports = router;
