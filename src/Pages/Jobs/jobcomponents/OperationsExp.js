import React from "react";
import useCollapse from "react-collapsed";
import style from "./job.module.css";

export default function OperationExp() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div >
      <div className={style.currentLocation} style={{textAlign:"left"}}>
            <div style={{fontWeight:"bold", justifyContent:"space-between",display:"flex", width:"100%",fontSize:"1.4em"}} className="header" {...getToggleProps()}>
                {isExpanded ? 'Operation                   ' : 'Operation                    '}<p style={{color:"orange"}}>{isExpanded ? '-' : '+'}</p>
            </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <div>
            <a style={{width:"85%", marginLeft:"5%", fontSize:"1.3em", color:"orange"}} href="/jobs/business_analyst/">Business Analyst</a>
                <p style={{width:"85%", marginLeft:"5%", fontSize:"1.2em"}}>We are looking for a graduating senior interested in data analytics to join our team as a Business Analyst in the spring.
                    Business analysts will work cross functionally, to support Marketing, Product, Business Operations,
                    and Customer Care with data-driven decision-making. We’re looking for someone with a quantitative
                    background who is interested in learning about all facets of a growing business.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
