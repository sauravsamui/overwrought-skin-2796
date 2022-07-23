import React from 'react'
import useCollapse from 'react-collapsed';
import style from "./job.module.css";
import OperationExp from './OperationsExp';
import ProductExpand from './ProductExpand';

export default function Middle() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className={style.body} >
        <p style={{fontWeight:"bold", fontSize:"2.5em", marginBottom:"6%", color:"rgb(19, 59, 103)"}}>Current Openings</p>
        <div className={style.currentLocation} style={{textAlign:"left"}}>
            <div style={{fontWeight:"bold", justifyContent:"space-between",display:"flex", width:"100%",fontSize:"1.4em"}} className="header" {...getToggleProps()}>
                {isExpanded ? 'Engineering                   ' : 'Engineering                    '}<p style={{color:"orange"}}>{isExpanded ? '-' : '+'}</p>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div style={{width:"85%", marginLeft:"5%", fontSize:"midium",fontWeight:"500"}}>
                    As a Software Engineer at Lose It!, you'll help design and build new features, products, and capabilities for our mobile app. We believe that small teams of talented people can do great things, so we're looking for someone that can contribute to all phases of building a great product.
                    </div>
                    <div className={style.engg} >
                    <h4 style={{fontWeight:"500",margin:"2%",fontSize:"1.5em"}} className={style.jobH4}>Android</h4>
                <a href="/jobs/SE_Android/">Software Engineer - Android</a><br />

                <a href="/jobs/SSE_Android/">Senior Software Engineer - Android</a><br />

                <a href="/jobs/PSE_Android/">Principal Software Engineer - Android</a>

                <h4 style={{fontWeight:"500",margin:"2%"}}>iOS</h4>
                <a href="/jobs/SE_iOS/">Software Engineer - iOS</a><br />

                <a href="/jobs/SSE_iOS/">Senior Software Engineer - iOS</a><br />

                <a href="/jobs/PSE_iOS/">Principal Software Engineer - iOS</a>

                <h4 style={{fontWeight:"500",margin:"2%"}}>Full Stack, Backend &amp; Infrastructure</h4>
                <a href="/jobs/SSE_FullStack/">Senior Software Engineer - Full Stack</a><br />
                <a href="/jobs/SSE_Backend/">Senior Software Engineer - Backend</a><br />
                <a href="/jobs/SSE_Infrastructure/">Senior Software Engineer - Infrastructure</a><br />
                
                <a href="/jobs/PSE_FullStack/">Principal Software Engineer - Full Stack</a><br />
                <a href="/jobs/PSE_Backend/">Principal Software Engineer - Backend</a><br />
                <a href="/jobs/PSE_Infrastructure/">Principal Software Engineer - Infrastructure</a>
                    </div>

                </div>
            </div>
        </div><br />
        <ProductExpand /><br />
        <OperationExp />
        </div>
        );
}
