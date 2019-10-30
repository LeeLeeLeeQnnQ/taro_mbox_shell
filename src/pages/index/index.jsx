import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'


@inject('position')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
  }

  componentWillReact () {
  }

  componentDidMount () {
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    console.log(this.props)
    const { position } = this.props
    position.updatePosition({s:1})
  }

  render () {
    const { position: { user_position } } = this.props
    return (
      <View className='index'>
        <Button onClick={this.handleClick}>dianwo</Button>
        {user_position}
      </View>
    )
  }
}

export default Index 
