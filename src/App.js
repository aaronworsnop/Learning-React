import './App.css';
import Employee from './components/Employee';
import Counter from './components/Counter'
import Form from './components/Form'
import Navbar from './components/Navigation';
import Navbar from './components/Navigation';
import React, { useState } from 'react';

function App() {
  const [role, setRole] = useState("Developer");
  const showEmployees = true;
  return (
    <>
      <div className="App">
        {showEmployees ? (
          <>
          <Navbar />
          <label htmlFor="bethany-role">Bethany's Role:</label>
          <input id="bethany-role" type="test" onChange={(e) => {
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
