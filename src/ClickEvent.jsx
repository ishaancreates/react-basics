

function Button() {

  const handleClick = (e) => e.target.textContent = "Yess Daddy just like this 🤤"
  const handleClick1 = (e) => {
    e.target.textContent = "Daddy Harder 🥵"
    // console.log(`${name} KEH RHA NA MAT KAR`)
  }

  return (
    <button onClick={(e) => handleClick1(e)} onDoubleClick={(e) => handleClick(e)}>
      Press Me Daddy 🫦
    </button>
  )
}

export default Button;

/*

import Button from './ClickEvent.jsx';

function App() {
  return(
    <Button/>
  )
}

export default App;


 */