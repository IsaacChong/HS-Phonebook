import { useEffect, useState } from "react";
import AddNewPerson from "./components/Addnewperson";
import Filter from "./components/Filter";
import List from "./components/List";
import personService from "./services/persons";
import Notification from "./components/Notification";

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
  const [displayNotification, setDisplayNotification] = useState(false);
  const [noteStatus, setNoteStatus] = useState("");

  const showNotif = (noteStat) => {
    setDisplayNotification((displayNotification) => !displayNotification);
    // Display notification for 5 seconds
    setNoteStatus(noteStat);
    setTimeout(() => {
      setDisplayNotification((displayNotification) => !displayNotification);
    }, 5000);
  };

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
      {displayNotification ? <Notification noteStatus={noteStatus} /> : null}
      <h2>Phonebook</h2>
      <AddNewPerson
        persons={persons}
        setPersons={setPersons}
        showNotif={showNotif}
      />
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
