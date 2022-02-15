import { Component } from 'react'
import { Swiper, SwiperItem, View, CustomWrapper, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <Swiper
        className='box'
        autoplay
        interval={1500}
        indicatorColor='#999'
        onClick={() => { }}
        circular
        onAnimationFinish={() => { }}
      >
        <SwiperItem>
          <View>
            <CustomWrapper>
              <Text>Hello, world!</Text>
            </CustomWrapper>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='text'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='text'>3</View>
        </SwiperItem>
      </Swiper>
    )
  }
}
