import axios from "axios";

// Relative path for deployed app
const baseUrl = "/api/persons";
// Path for frontend not in same location as backend
// const baseUrl = "http://phonebook-3235326.herokuapp.com/api/persons";

const addPerson = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const getAllPersons = () => {
  return axios.get(baseUrl);
};

const deletePerson = (id) => {
  return axios.delete(baseUrl + `/${id}`);
};

const changeNum = (id, updatedObject) => {
  const request = axios.put(baseUrl + `/${id}`, updatedObject);
  return request.then((res) => res.data);
};

export default {
  addPerson: addPerson,
  getAllPersons: getAllPersons,
  deletePerson: deletePerson,
  changeNum: changeNum,
};
