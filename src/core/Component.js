export default class Component {
  constructor() {
    this.state = {};
  }

  setState(state) {
    this.state = state;
    const reder_event = new CustomEvent("cutomRender");
    window.dispatchEvent(reder_event);
    this.update();
  }

  mount() {
    console.log("mount init");
  }

  update() {
    console.log("update init");
  }

  render() {}
}
