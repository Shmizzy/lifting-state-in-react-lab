

const BurgerStack = (props) => {
    const removeIngredient = (ingredient) => {
        props.removeFromBurger(ingredient);
    }
    
    return (
    <ul>
        {props.stack.map((element, index) => {
            return <li key={index} style={{backgroundColor: element.color}}>{element.name}
            <button onClick={() => removeIngredient(element)}>-</button>
            </li>
        })}
    </ul>
    );
  };
  
  export default BurgerStack;