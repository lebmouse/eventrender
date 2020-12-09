import "./styles.css";
import Hello from "./component/Hello";

const root = document.getElementById("root");

const hello = new Hello();
window.addEventListener("cutomRender", () => {
  root.innerHTML = hello.render();
  hello.mount();
});

const event = new Event("cutomRender");
window.dispatchEvent(event);
