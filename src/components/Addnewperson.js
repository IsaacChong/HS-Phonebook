import { useState } from "react";
import personService from "../services/persons";

const AddNewPerson = (props) => {
  const { persons, setPersons, showNotif } = props;

  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState(0);

  const numChange = (event) => {
    setNewNum(event.target.value);
  };
  const inputChange = (event) => {
    setNewName(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNum,
    };
    const checkForName = (person) => person.name === newPerson.name;
    const checkForNum = (person) => person.number === newPerson.number;

    // Updates number of existing person
    if (persons.some(checkForName)) {
      let cfmWindow = window.confirm(
        `${newPerson.name} is already in the book. Do you want to replace this person's number?`
      );
      if (cfmWindow) {
        const personExists = persons.find(
          (person) => person.name === newPerson.name
        );
        personExists.number = newNum;
        personService.changeNum(personExists.id, personExists).then((res) => {
          let updatedNumList = persons.map((person) => {
            return res.id === person.id ? res : person;
          });
          setPersons(updatedNumList);
          setNewName("");
          setNewNum(0);
        });
      }
    } else if (persons.some(checkForNum)) {
      alert(`${newPerson.number} is already in the book`);
    } else {
      personService.addPerson(newPerson).then((res) => {
        setPersons(persons.concat(res.data));
      });
      showNotif();
      setNewName("");
      setNewNum(0);
    }
  };

  return (
    <form onSubmit={addNewPerson}>
      <h4>Add new caller</h4>
      <div>
        Name: <input onChange={inputChange} value={newName} type="text" />
        <br />
        Phone number:{" "}
        <input onChange={numChange} value={newNum} type="number" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddNewPerson;
