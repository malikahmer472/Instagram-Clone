import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import CommentScreen from './Components/Comment-Screen';
import MessageList from './Components/MessageList';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
  
       <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:UserId' element={<Profile/>}/>
        <Route path='/CommentScreen' element={<CommentScreen/>}/>
        <Route path='/MessageList' element={<MessageList/>}/>

      </Routes>
    </Router>
    
   
  );
}

export default App;
