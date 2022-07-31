import { useEffect, useState } from "react";
import AddNewPerson from "./components/Addnewperson";
import Filter from "./components/Filter";
import List from "./components/List";
import personService from "./services/persons";

const App = () => {
  // [
  //   { id: 1, name: "Arto", number: 43 },
  //   { id: 2, name: "Bob", number: 32 },
  //   { id: 3, name: "Sam", number: 98 },
  //   { id: 4, name: "Gamgee", number: 13 }
  // ]
  const [persons, setPersons] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const getPersons = () => {
    personService.getAllPersons().then((res) => setPersons(res.data));
  };

  useEffect(getPersons, []);

  useEffect(() => {
    setFilteredList(
      persons.filter(
        (person) => person.name.toUpperCase() === filterName.toUpperCase()
      )
    );
  }, [filterName]);

  const nameFilter = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <AddNewPerson persons={persons} setPersons={setPersons} />
      <List
        filteredList={filteredList}
        persons={persons}
        getPersons={getPersons}
      />
      <Filter nameFilter={nameFilter} />
    </>
  );
};

export default App;
