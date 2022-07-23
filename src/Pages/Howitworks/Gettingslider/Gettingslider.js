import React from 'react'
import style from './getting.module.css'
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "orange", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "orange", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}


export default function
    () {
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={style.mainContainer}>
            <h2 style={{fontWeight:"700", padding:"1%", color:"#183962", width:"100%", textAlign:"center",fontSize:"22px"}}>Getting Started</h2>
            <p style={{padding:"1%", color:"black", width:"100%", textAlign:"center"}}>Check out these articles to help you get started on your journey to a healthy weight.</p>
            <div className={style.slickCont} >
                <Slider {...settings2}>
                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src='https://assets.loseit.com/website/HIW/grocery-store-hacks_image.png' alt='1' />
                            </div>
                            <div className={style.sltext}>
                                <p className={style.pa}>18 Grocery Store Hacks to Eat Healthy on a Budget</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src='https://assets.loseit.com/website/HIW/food-coping-skill_image.png' alt='2' />
                            </div>
                            <div className={style.sltext}>
                                <p>What To Do When Food Is Your Primary Coping Skill</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src='https://assets.loseit.com/website/HIW/why-calories-matter_image.png' alt='3' />
                            </div>
                            <div className={style.sltext}>
                                <p>Why Calories Matter</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src='https://assets.loseit.com/website/HIW/nutrition-label_image.png' alt='4' />
                            </div>
                            <div className={style.sltext}>
                                <p>Navigating the Nutrition Label</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src='https://assets.loseit.com/website/HIW/justin_image.png' alt='5' />
                            </div>
                            <div className={style.sltext}>
                                <p>Meet Justin</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimg}>
                                <img src='https://assets.loseit.com/website/HIW/kitchen-facelife_image.png' alt='6' />
                            </div>
                            <div className={style.sltext}>
                                <p>Set Yourself up for Success with a Kitchen Facelift</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div >
        </div >
    )
}
