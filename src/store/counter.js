import { observable, computed , action } from "mobx";

class Counter {
    constructor(props) {
    }
    @observable price = 1;
    @observable amount = 1;
    @action changeAmount( amount ) {
      this.amount = amount;
    }
    @computed get getTotal() {
      return this.price * this.amount;
    }
}
const counter = new Counter()

export default counter