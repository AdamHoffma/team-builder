import React, {useState} from "react"
import TeamInfo from "./Form.js"


export default function NewMember(props) {
    
    return (
        <div>
    {props.person.name}
    {props.person.email}
    {props.person.role}
    </div>
    )
}