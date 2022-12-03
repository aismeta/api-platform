import './App.css';
import Sidebar from './Component/Sidebar';
import Navigatebar from './Component/Navigatebar';
import Mainpage from './Component/Mainpage';

function App() {
  return (
    <>
    <div className="App">
       <div><Sidebar/></div>
       <div><Navigatebar/></div>
       <div><Mainpage/></div>
    </div>
    </>
  );
}

export default App;
