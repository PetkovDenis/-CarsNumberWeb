 
 import Home from './components/Numbers'
 import MainAppBar from './components/MainAppBar'
 import RegConfig from './components/RegConfig';
 import './css/MainStyles.css'

function App() {
  return (
    <div className="mainStyle" > 
      <MainAppBar/>
      {/* <Home/> */}
      <RegConfig/>
    </div>
  );
}

export default App;
