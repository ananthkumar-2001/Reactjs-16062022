import React from 'react'

function NameListFour() {
    const persons = [
        {
            id: 1,
            name : "Ananth",
            age: 22,
            skill: "Leader"
        },
        {
            id: 2,
            name : "Venkata",
            age: 40,
            skill: "Analyst"
        },
        {
            id: 3,
            name : "Kumar",
            age: 35,
            skill: "Developer"
        },
        {
            id: 4,
            name : "Pandu",
            age: 28,
            skill: "Boss"
        },
    ]

  return (
    <div>
        {
            persons.map(person=>{
                return(
                    <ul key={person.id}>
                        <li>{person.name}</li>
                        <li>{person.age}</li>
                        <li>{person.skill}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default NameListFour