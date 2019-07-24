import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamInfo from "./Form.js"
import NewMember from "./Team.js"




  function App() {
  
  const {members, setMembers} = useState([])
  const [person, setPerson] = useState({name: "", email: "", role: ""});
  

  return (
    <div className="App">
      <TeamInfo setMembers={setMembers}/>
      {members.map(person => <NewMember person={person}/>)}       
    </div>
  );
}

export default App;
