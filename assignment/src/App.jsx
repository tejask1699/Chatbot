import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './Components/Registeration/Register';
import Login from './Components/Registeration/Login';
import Organization from './Components/Pages/Organization';
import ChatbotIntegration from './Components/Pages/ChatbotIntegration';
function App() {

  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/organization' element={<Organization/>}/>
        <Route path='/chatbot' element={<ChatbotIntegration/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
