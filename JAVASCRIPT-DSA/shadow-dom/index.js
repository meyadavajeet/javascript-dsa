customElements.define(
  "custom-tag",
  class extends HTMLElement {
    connectedCallback() {
      const temp = this.attachShadow({ mode: "open" });
      temp.innerHTML = `
     <p class ='error'>   hello ,  ${this.getAttribute("data")} </p>
      `;
    }
  }
);
