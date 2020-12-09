import Component from "../core/Component";

const elementMap = {
  inputText: "inputText",
  btn: "btn"
};

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: "young"
    };
    this.handleNameChange = () => {
      if (this.state.name === "young") {
        this.setState({ name: "kwon" });
      } else {
        this.setState({ name: "young" });
      }
    };
  }
  mount() {
    const inputText = document.getElementById(elementMap.inputText);
    const btn = document.getElementById(elementMap.btn);
    btn &&
      btn.addEventListener("click", () => {
        this.setState({ name: inputText.value });
      });
  }

  render() {
    const { name } = this.state;
    return `
    <div>
      <input id="${elementMap.inputText}" value="${name}" />
      <button id="${elementMap.btn}">클릭하세요</button>
      ${name} 안녕하세요
    </div>`;
  }
}
