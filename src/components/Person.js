import personService from "../services/persons";

const Person = (props) => {
  const { name, number, getPersons, id } = props;

  const removePerson = () => {
    const checkDel = window.confirm(
      "Are you sure you want to delete this person?"
    );
    if (checkDel) {
      personService.deletePerson(id).then(getPersons);
    }
  };

  return (
    <li>
      <h4>{name}</h4>
      <p>{number}</p>
      <button
        onClick={() => {
          removePerson();
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Person;
