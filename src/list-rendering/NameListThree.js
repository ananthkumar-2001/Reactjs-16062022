import React from 'react'

function NameListThree() {
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

    const personList = persons.map(person => {
        return (
            <div key={person.id}>
            <h2>Name : {person.name}</h2>
            <h2>Age : {person.age}</h2>
            <h2>Skill : {person.skill}</h2>
            <br />
            </div>
        )
    })
  return personList
}

export default NameListThree