import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import EmployeeGridView from './components/employees/employee-grid-view';

function App() {
  return (
    <div className="App">
      <EmployeeGridView></EmployeeGridView>
    </div>
  );
}

export default App;
