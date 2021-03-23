import logo from './logo.svg';
import './App.css';
import Meals from "./Meals.js";
import ValidationTextFields from "./UpdateMeals.js";

function App() {
  return (
    <div className="App">
      <Meals></Meals>
      <ValidationTextFields></ValidationTextFields>
    </div>

  );
}

export default App;
