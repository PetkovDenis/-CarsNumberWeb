 
 import Home from './components/Home'
 import MainAppBar from './components/MainAppBar'
 import RegConfig from './components/RegConfig';
 import './components/css/MainStyles.css'

function App() {
  return (
    <div className="mainStyle" > 
      <MainAppBar/>
      <Home/>
      <RegConfig/>
    </div>
  );
}

export default App;
