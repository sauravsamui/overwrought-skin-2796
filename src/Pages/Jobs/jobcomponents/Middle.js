import React from 'react'
import useCollapse from 'react-collapsed';
import style from "./job.module.css";

export default function Middle() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div>
        <p>Current Openings</p>
        <div className={style.currentLocation}>
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/><br/>
                    Click again to hide...
                </div>
            </div>
        </div>
        </div>
        );
}
