import React from 'react'
import style from './basic.module.css'
import Slider from "react-slick";
import soft from "../../../assets/soft.jpg";
import personilised from '../../../assets/personilised.jpg'
import advice from '../../../assets/advice.jpg'
import intrutive from '../../../assets/intrutive.jpg'
import pattern from '../../../assets/pattern.jpg'
import watch from '../../../assets/watch.jpg'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "orange", borderRadius: "50%"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: "orange", borderRadius: "50%" }}
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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={style.mainContainer}>
            <div className={style.slickCont} >
                <Slider {...settings2}>
                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src={soft} alt='1' />
                            </div>
                           
                        </div>
                    </div>

                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src={personilised} alt='2' />
                            </div>
                            
                        </div>
                    </div>

                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src={advice} alt='3' />
                            </div>
                           
                        </div>
                    </div>
                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src={intrutive} alt='4' />
                            </div>
                           
                        </div>
                    </div>
                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimage}>
                                <img src={pattern} alt='5' />
                            </div>
                           
                        </div>
                    </div>
                    <div>
                        <div className={style.slcard}>
                            <div className={style.slimg}>
                                <img src={watch} alt='6' />
                            </div>
                           
                        </div>
                    </div>
                </Slider>
            </div >
        </div >
    )
}
