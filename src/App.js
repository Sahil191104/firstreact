// import logo from './logo.svg';
import './App.css';
import Counter from './container/Counter';
import CounterFun from './container/CounterFun';
import Employe from './container/Employe';
import EmployeFun from './container/EmployeFun';
import Students from './container/Students';
import StudentsFun from './container/StudentsFun';

function App() {
  return (
    <div>
      <Students />
      <StudentsFun />
      <Employe />
      <EmployeFun />
      <Counter />
      <CounterFun />
    </div>
  );
}

export default App;
