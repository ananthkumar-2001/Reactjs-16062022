import React from 'react'

const FunctionClick = () => {

    function clickHandler (){
        console.log("Button is clicked - function")
    }
  return (
    <div>
        <button className='btn btn-primary'
                onClick={clickHandler}
        >Click me</button>
    </div>
  )
}

export default FunctionClick