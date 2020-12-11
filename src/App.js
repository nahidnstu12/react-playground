import React,{useState} from 'react';
import './App.css';
// import Main from './Pagination-hooks/Main';
// import GridTest from './MUI/Grid'
// import ThemeNesting from './MUI/Theming'
// import ButtonBase from './MUI/ButtonBase'
// import TinderHome from './TinderButtonMui/Home';
import EmployeeForm from './MUI-Form/EmployeeForm'
import { MuiBreakpoints } from './MUI/MuiBreakpoints';


function App() {
  const [cool,setCool] = useState(false)
  return (
    <div className="App">
     <h3 className="text-danger text-center">React PlayGround</h3>
      {/* <ButtonBase /> */}
      {/* <TinderHome /> */}
      {/* <Main /> */}
      <MuiBreakpoints cool={cool}/>
      {/* <EmployeeForm /> */}

    </div>
  );
}

export default App;
