import './App.css';
import Blogs from './Blog';
import Portfolio from './Portfolio';
import HomePage from './HomePage';
import Podcast from './Podcast';


function App() {
  return (
    <div className="App">
      <HomePage/>
      <Podcast/>
     
     <Blogs/>   
     <Portfolio/>
    </div>
  );
}

export default App;
