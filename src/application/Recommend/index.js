import React from "react";
import './style.css'
import Slider from '../../components/Slider'
import RecommendList from '../../components/List'
import Scroll from '../../baseUI/scroll/index'

function Recommend() {
    const bannerList = [1, 2, 3, 4].map(el => {
        return {
            imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
        }
    })

    const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(el => {
        return {
            id: 1,
            picUrl: 'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
            playCount: 17171122,
            name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        }
    })

    return (
        <div className={'content'}>
            <Scroll>
                <div>
                    <Slider bannerList={bannerList}></Slider>
                    <RecommendList recommendList={recommendList}></RecommendList>
                </div>
            </Scroll>
        </div>
    )
}

export default React.memo(Recommend)
