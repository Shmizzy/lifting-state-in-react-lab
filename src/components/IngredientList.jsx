

const IngredientList = (props) => {
    
    const addIngredient = (ingredient) => {
        props.addToBurger(ingredient);
    }
    
    return (
    <ul>
        {props.availableIngredients.map((element,index) => {
            return <li 
                key={index}
                style={{backgroundColor: element.color}}>
                    {element.name}
                    <button onClick={() => addIngredient(element)}>+</button>
                </li>
        })}
    </ul>
    );
  };
  
  export default IngredientList;