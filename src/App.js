import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [ roman, setRoman ] = useState( '' )
  const [ integer, setInteger ] = useState( 0 )
  const [modal, setModal] = useState(false)
  
  const handleChange = ( e ) => {
    setRoman((e.target.value).toUpperCase())
  }
  
  const handleSubmit = ( e ) => {
    e.preventDefault()

    const comparisonArray = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

    const romanArray = roman.split( '' )
    
    let totalNumber = 0

    let firstLetter;
    let firstNumber;
    let nextLetter;
    let nextNumber;

    for ( let i = 0; i < romanArray.length; i++ ){
      firstLetter = romanArray[ i ]
      firstNumber = comparisonArray[ firstLetter ]      
      nextLetter = romanArray[ i + 1 ]
      nextNumber = comparisonArray[ nextLetter ]
      
      if ( firstNumber < nextNumber ) {
        totalNumber -= firstNumber
      } else {
        totalNumber += firstNumber
      }
    }

    if ( !totalNumber ) {
      setModal( true )
    }
    setInteger( totalNumber )
    
  }

   useEffect(() => {
     const timer = setTimeout(() => {
       setModal(false);
     }, 1000);
     return () => clearTimeout(timer);
   } );
  
  useEffect(() => {
    const timer = setTimeout( () => {
      setRoman('');
      setInteger(0);
    }, 3000);
    return () => clearTimeout(timer);
  });


  return (
    <div className='container'>
      <h2>Convert Roman Numeral to Integer</h2>
      <div className='roman'>
        <input type='text' placeholder='roman numeral' value={roman} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
        <div>
          {modal && (
            <h4 className='roman-h4'>Please enter a valid Roman Numeral!</h4>
          )}
        </div>
      </div>
      <div className='integer'>
        <h2 className='int-h3'>INTEGER : {integer}</h2>
      </div>
      <h5>a react app</h5>
    </div>
  );
}

export default App
