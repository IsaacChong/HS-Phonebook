import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const addPerson = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const getAllPersons = () => {
  return axios.get(baseUrl);
};

const deletePerson = (id) => {
  return axios.delete(baseUrl + `/${id}`);
};

export default {
  addPerson: addPerson,
  getAllPersons: getAllPersons,
  deletePerson: deletePerson,
};
