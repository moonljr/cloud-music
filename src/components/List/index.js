import React from "react";
import './index.scss'
import {getCount} from '../../api/utils'

function RecommendList(props) {
    const {recommendList} = props
    return (
        <div className={'recommendList-wrapper'}>
            <h1 className={'title'}>推荐歌单</h1>
            <div className={'list'}>
                {
                    recommendList.map((el, index) => {
                        return (
                            <div key={el.id + index} className={'listItem'}>
                                <div className={'img_wrapper'}>
                                    <div className={'decorate'}></div>
                                    <img src={el.picUrl + "?param=300x300"} width={'100%'} height={'100%'} alt="music" />
                                    <div className={'play_count'}>
                                        <i className="iconfont play">&#xe885;</i>
                                        <span className={'count'}>
                                            {getCount(el.playCount)}
                                        </span>
                                    </div>
                                </div>
                                <div className="desc">{el.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default React.memo(RecommendList)
