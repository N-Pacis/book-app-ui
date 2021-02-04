import React from 'react'
import "./SidebarOption.css"

function SidebarOptions({title,Icon,className}) {
    return (
        <div className={`sidebarOption ${className}`}>
            {Icon && <Icon className={className}/>}
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarOptions
