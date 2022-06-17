import React from 'react'

function NameListOne() {
    const names = ["Ananth", "Kumar", "Venkata"]
  return (
    <div>
        {/* {
            names.map(function(names) {
                return <h1>{names}</h1>
            })
        } */}
        {
            names.map( (names, index) =>  <h1 key={index}>{names}</h1>)
        }
    </div>
  )
}

export default NameListOne