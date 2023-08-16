// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './container/Products';
import { Form } from 'reactstrap';
import { Provider } from 'react-redux';
import { configstore } from './redux/Store';
import CounterRedux from './container/CounterRedux';
import Notistack from './container/Notistack';
import Drawer from './container/Drawerdata';
// import Clock from './container/Clock';
// import ClockFun from './container/ClockFun';
// import Counter from './container/Counter';
// import CounterFun from './container/CounterFun';
// import Country from './container/Country';
// import CountryFun from './container/CountryFun';
// import Employe from './container/Employe';
// import EmployeFun from './container/EmployeFun';
// import Students from './container/Students';
// import StudentsFun from './container/StudentsFun';
// import Traveler from './container/Traveler';

function App() {
  const store = configstore();

  return (
    <div>
      <Provider store={store}>
        {/* <Students />
      <StudentsFun />
      <Employe />
      <EmployeFun />
      <Counter />
      <CounterFun /> */}
        {/* <Country />
      <CountryFun /> */}
        {/* <Clock /> */}
        {/* <ClockFun /> */}
        {/* <Traveler /> */}
        {/* <Products /> */}
        {/* <CounterRedux/> */}
        {/* <Notistack/> */}
        {/* <Form /> */}
        <Drawer />
      </Provider>
    </div>
  );
}

export default App;
