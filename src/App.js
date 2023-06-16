import './App.css';
import Employee from './components/Employee';
import Counter from './components/Counter'
import Form from './components/Form'

function App() {
  console.log("We are about to list the employees.")
  const showEmployees = true;
  return (
    <>
      <div className="App">
        {showEmployees ? (
          <>
          <Employee name="Aaron" role="Intern"/>
          <Employee name="Bethany"/>
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
