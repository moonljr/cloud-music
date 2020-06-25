import React from "react";
import './style.css'
import Slider from '../../components/Slider'

function Recommend() {
    const bannerList = [1, 2, 3, 4].map(el => {
        return {
            imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
        }
    })
    return (
        <div>
            <Slider bannerList={bannerList}></Slider>
        </div>
    )
}

export default React.memo(Recommend)
