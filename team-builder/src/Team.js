import React, {useState} from "react"
import TeamInfo from "./Form.js"


 const Person = props => {
    return (
      <div>
        {props.person.name}
        {props.person.email}
        {props.person.role}
      </div>
  )
}

export default Person