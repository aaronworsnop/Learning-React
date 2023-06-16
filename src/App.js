import './App.css';
import Employee from './components/Employee';
import Counter from './components/Counter'
import Form from './components/Form'
import React, { useState } from 'react';

function App() {
  const [role, setRole] = useState("Developer");
  const showEmployees = true;
  return (
    <>
      <div className="App">
        {showEmployees ? (
          <>
          <input type="test" onChange={(e) => {
            setRole(e.target.value);
          }}></input>
          <Employee name="Aaron" role="Intern"/>
          <Employee name="Bethany" role = {role}/>
          <Employee name="Cameron"/>
          <Employee name="Daron"/>
          <Employee name="Ella"/>
          </>
        ) : (
          <p>Not allowed</p>
        )}
      </div>

      <div>
        <Counter />
      </div>

      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
