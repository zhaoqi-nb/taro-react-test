import { Component } from 'react'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.less'

const imgList = [1,2,3,4,5,6,7,8,9]

export default class Index extends Component {

  componentWillMount() {
    console.log('componentWillMount')
   }

  componentDidMount() { console.log('componentDidMount')}

  componentWillUnmount() {console.log('componentWillUnmount') }

  componentDidShow() {console.log('componentDidShow') }

  componentDidHide() {console.log('componentDidHide') }

  render() {
    return (
      <Swiper
        className='box'
        autoplay
        interval={1000}
        indicatorColor='#999'
        onClick={() => { }}
        circular
        onAnimationFinish={() => { }}
        style={{ height: '300px' }}
      >
        {imgList.map(v => <SwiperItem>{v}</SwiperItem>)}
      </Swiper>
    )
  }
}
