import React, {useState} from 'react'
import NewMember from "./Team.js"


export default function TeamInfo() {   
    const [user, setUser] = useState({name: "", email: "", role: ""})
    const [person, setPerson] = useState([NewMember])
    function changePerson(event) {
        event.preventDefault()
        setUser({...user, [event.target.name]: event.target.value})
    }

    const Submit = event => {
        event.preventDefault()
        setPerson({...person, [event.target.name]: event.target.value})
        
    }
    return (
        <form  onSubmit={Submit}>
            <label>
                Name:
                <input type="text" name="name" value={user.name} onChange={changePerson}/>
            </label>
            <label>
                Email:
                <input type="text" name="email" value={user.email} onChange={changePerson}/>
            </label>
            <label>
                Role:
                <input type="text" name="role" value={user.role} onChange={changePerson}/>
            </label>
            <button type='submit'>Add Person</button>
        </form>
    );
}

/*
Dakota Hoskins 3:26 PM
Okay so I've made my own list of instructions 
to help me break it down, can you guys let me 
know if you think these are accurate?
1. Write the code for forms and a user card, 
style them with a hardcoded example.
2. Make it so you can submit information in 
the forms and the info provided will be saved to 
state in the form of a cumulative array of objects.
3. Map over the array to create a collection 
of user cards with the information submitted via the forms.
4. Add an edit button to the user cards that, 
when clicked, populate that object's info into 
the forms and allow it to be edited/resubmitted.
*/