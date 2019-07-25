import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamInfo from "./Form.js"
import Person from "./Team.js"

/*
const Form = props => {
  const [person, setPerson] = useState({name: "", email: "", role: ""})

  const changePerson = event => {
    setPerson({...person, [event.target.name]: event.target.value})
  }

  const submit = event => {
    event.preventDefault()
    props.setPeople(people => [...people, person] )
    setPerson({name: "", email: "", role: ""})
  }

  return (
    <form onSubmit={submit}>
      name
      <imput
      name="name"
      value={person.name}
      onChange={changePerson}/>
      email
      <input 
      name="email"
      value={person.email}
      onChange={changePerson}/>
      role
      <input
      name='role'
      value={person.role}
      onChange={changePerson}/>
      <button type="submit">Add Person</button>
    </form>
  )
}*/

  /*const Person = props => {
    return (
      <div>
        {props.person.name}
        {props.person.email}
        {props.person.role}
      </div>
  )
}*/

 const App = () => {
  const [people, setPeople]= useState([{}])
  console.log(setPeople)

  return (
    <div>
      <TeamInfo setPeople={setPeople}/>
      {people.map(person => <Person person={person}/>)}
    </div>
  )
}
export default App

