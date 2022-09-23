import React from 'react'
import "../Styles/LayoutsS/MarginLayout.scss"

const MarginLayout = ({children}) => {
  return (
    <div className="margin">
        <div className="center">
            {children}
        </div>
    </div>
  )
}

export default MarginLayout