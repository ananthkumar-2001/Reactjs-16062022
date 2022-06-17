import React from 'react'
import "./AppStyle.css"
import styles from "./AppStyles.module.css"

function AppStyle() {
  return (
    <div>
        <h1 className='success'>Apply Styles using Regular Css Style Sheet</h1>
        <h1 className={styles.success}>Apply Styles using Regular module CSS style Sheet</h1>
    </div>
  )
}

export default AppStyle