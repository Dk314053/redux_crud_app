
import Read from './component/Read';
import Create from './component/Create';
import Navbar from './component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route exact path='/' element={<Create/>}/>
  <Route exact path='/read' element={<Read/>}/>
</Routes>
</BrowserRouter>
    
    </div>
  );
}

export default App;
