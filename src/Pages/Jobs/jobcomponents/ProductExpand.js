import React from "react";
import useCollapse from "react-collapsed";
import style from "./job.module.css";

export default function ProductExpand() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div >
      <div className={style.currentLocation} style={{textAlign:"left"}}>
            <div style={{fontWeight:"bold", justifyContent:"space-between",display:"flex", width:"100%",fontSize:"1.4em"}} className="header" {...getToggleProps()}>
                {isExpanded ? 'Product                   ' : 'Product                  '}<p style={{color:"orange"}}>{isExpanded ? '-' : '+'}</p>
            </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <div>
            <p style={{width:"85%", marginLeft:"5%", fontSize:"1.2em"}}>As a UX Designer at Lose It!, you'll design the future of our app and help millions of our
                    members live healthier lives.</p>

                <a style={{width:"85%", marginLeft:"5%", fontSize:"1.3em", color:"orange"}} href="/jobs/ux-designer/">UX Designer (iOS)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
