import React, {useState, useEffect} from "react";
import './style.css'
import 'swiper/css/swiper.css'
import Swiper from 'swiper'

function Slider(props) {
    const [sliderSwiper, setSliderSwiper] = useState(null);
    const {bannerList} = props
    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let newSliderSwiper = new Swiper(".slider-container", {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {el: '.swiper-pagination'},
            });
            setSliderSwiper(newSliderSwiper);
        }
    }, [bannerList.length, sliderSwiper])
    return (
        <div className='sliderMain'>
            <div className='before'></div>
            <div className='slider-container'>
                <div className='swiper-wrapper'>
                    {
                        bannerList.map((el, index) => {
                            return (
                                <div className='swiper-slide' key={el.imageUrl + index}>
                                    <div className='slider-nav'>
                                        <img src={el.imageUrl} width={'100%'} height={'100%'} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='swiper-pagination'></div>
            </div>
        </div>
    )
}

export default React.memo(Slider)
