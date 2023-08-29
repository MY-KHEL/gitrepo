// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [person , setPerson] = useState({
      name : 'Michael',
      age : 21,
      isAdmitted:true,
      gender:'male'
  })
  function handleChange(){
    setPerson(person => {
      return{
        ...person,isAdmitted:!person.isAdmitted
      }
    })
  }

console.log(person);
  return (
<>

   <div>
      i am {person.name} , I am a {person.gender} of {person.age} years old
<br/>
      i am {person.isAdmitted?'Admitted':'Not Admitted'} into university

      <br/>
      <button onClick={handleChange}>
        Change Admission
      </button>
   </div>
   </>
  );
}

export default App;
