

 
import './App.css';
import AllRoutes from './Component/Routes';
 

import toast, { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
    <AllRoutes/> 
    <Toaster /> 
    </div>
  );
}

export default App;
