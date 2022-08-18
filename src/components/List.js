import Person from "./Person";

const List = (props) => {
  const { filteredList, persons, getPersons } = props;

  // Create a function to set the "filteredList" and "persons" states when a new person is added

  return (
    <>
      <h4>List of numbers</h4>
      <ol>
        {filteredList.length > 0
          ? filteredList.map((person) => (
              <Person
                key={person.id}
                name={person.name}
                number={person.number}
                getPersons={getPersons}
                id={person.id}
              />
            ))
          : persons.map((person) => (
              <Person
                key={person.id}
                name={person.name}
                number={person.number}
                getPersons={getPersons}
                id={person.id}
              />
            ))}
      </ol>
    </>
  );
};

export default List;
