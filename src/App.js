import { useEffect, useState } from "react";
import AddNewPerson from "./components/Addnewperson";
import Filter from "./components/Filter";
import List from "./components/List";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto", number: 43 }, 
    { id: 2, name: "Bob", number: 32 }, 
    { id: 3, name: "Sam", number: 98 }, 
    { id: 4, name: "Gamgee", number: 13 }
  ]);
  
  const [filterName, setFilterName] = useState("")
  const [filteredList, setFilteredList] = useState([])
  
  useEffect(() => {
    setFilteredList(persons.filter((person) => person.name.toUpperCase() === filterName.toUpperCase()))
  },[filterName])

  const nameFilter = (event) => {
    setFilterName(event.target.value);
  }

  return (
    <>
      <h2>Phonebook</h2>
      <AddNewPerson persons={persons} setPersons={setPersons}/>
      <List filteredList={filteredList} persons={persons}/>
      <Filter nameFilter={nameFilter}/>
    </>
  );
};

export default App;
