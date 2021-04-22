class Bus {
  actionPool = {};
  curListenerId = 0;
  name = "订阅--发布";
  constructor() {}
  emit() {
    for (let key in this.actionPool) {
      if (this.actionPool[key]) {
        this.actionPool[key]()
      }
    }
  }
  addListener(listener) {
    this.curListenerId++
    this.actionPool[this.curListenerId] = listener;
  }
  removeListener(listenerId) {
    delete this.actionPool[listenerId];
  }
}

export default  Bus