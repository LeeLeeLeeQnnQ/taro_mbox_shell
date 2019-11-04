import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './home.less'


@inject('position')
@inject('counter')
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
    const { position, counter } = this.props
    let amount = counter.amount+1
    counter.changeAmount(amount)
  }

  render () {
    const { counter } = this.props
    return (
      <View className='index'>
        <Button onClick={this.handleClick}>dianwo</Button>
        {counter.getTotal}
      </View>
    )
  }
}

export default Index 
