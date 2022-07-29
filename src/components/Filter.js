const Filter = (props) => {

    const {nameFilter} = props;

    return (
    <>
      <h4>Filter</h4>
      <input placeholder="Insert name here" onChange={nameFilter}/> 
    </>
 )
}

export default Filter