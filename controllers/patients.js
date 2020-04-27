const patientsService = require("../services/patients");

const getAll = (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  const patients = patientsService.getAll(page, limit, search);
  return res.json(patients);
};

module.exports = {
  getAll,
};
