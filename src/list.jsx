import PropTypes from 'prop-types';

function List(props) {
    
    const category=props.category
    const items=props.items
    const listItems = items.map(items => <li key={items.id}>
                                            Name: {items.name}: &nbsp;
                                            Calories: {items.calories}</li>);

    return (<>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
            </>);
}

List.propTypes ={
    category: PropTypes.string ,
    items : PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number, }))
}

export default List; 




    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

    // const lowCalFruits= fruits.filter(fruits => fruits.calories <50)
    // const highCalFruits= fruits.filter(fruits => fruits.calories >=50)




    /* 
    
    import List from "./list.jsx";

function App() {


const fruits = [{ id: 1, name: "Seb", calories: 45 },
                { id: 2, name: "Kela", calories: 63 },
                { id: 3, name: "Anar", calories: 34 },
                { id: 4, name: "Your mom", calories: 88 }];
const vegetables = [{ id: 1, name: "Aaloo", calories: 115 },
                { id: 2, name: "Pyaaj", calories: 83 },
                { id: 3, name: "Baigan", calories: 62 },
                { id: 4, name: "Your dad", calories: 69 }];

  return (
    <>
    <List items={fruits} category="Fruits"/> 
    <List items={vegetables} category="Vegetables"/> 

    </>
  );
}



export default App



    */