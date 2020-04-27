const patients = require("../models/patient");

const getFilteredPatients = (search) => {
  const newPatients = patients.filter((patient) => {
    if (
      patient.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      patient.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      patient.address.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      patient.phone.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      patient.website.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      patient.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
    ) {
      return true;
    }
    return false;
  });
  return newPatients;
};

const getAll = (page = 1, limit = 10, search = "") => {
  return (search.trim() === "" ? patients : getFilteredPatients(search)).slice(
    (page - 1) * limit,
    page * limit
  );
};

module.exports = {
  getAll,
};
