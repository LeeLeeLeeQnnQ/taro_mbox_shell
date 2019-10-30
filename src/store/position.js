import { observable } from 'mobx'

const position = observable({
  user_position: {},
  updatePosition( position ) {
    this.user_position = position;
  },
  clearPosition() {
    this.user_position = {};
  },
})


export default position