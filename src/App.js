import './App.css';
import Employee from './components/Employee';
import Counter from './components/Counter'

function App() {
  console.log("We are about to list the employees.")
  const showEmployees = true;
  return (
    <>
      <div className="App">
        {showEmployees ? (
          <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          </>
        ) : (
          <p>Not allowed</p>
        )}
      </div>

      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
