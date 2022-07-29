
const List = (props) => {

    const {filteredList, persons} = props

    return (
        <>
         <h4>List of numbers</h4>
          <ol>
           {filteredList.length > 0 ? filteredList.map((person) => (
            <li key={person.id}>{person.name} {person.number}</li>
            )) : persons.map((person) => (
            <li key={person.id}>{person.name} {person.number}</li>
            ))}
          </ol>
        </>
    )
}

export default List