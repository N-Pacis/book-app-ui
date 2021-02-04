import React from 'react'
import "./SidebarGroup.css"

function SidebarGroup(props) {
    return (
        <div className="sidebarGroup">
            <h2>{props.title}</h2>
        </div>
    )
}

export default SidebarGroup
