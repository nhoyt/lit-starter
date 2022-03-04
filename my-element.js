import {LitElement, html} from 'lit';

class MyElement extends LitElement {
  static properties = {
    message: {},
  };

  constructor() {
    super();
    this.message = 'KST';
  }

  render() {
    return html`
      <p>Hello, ${this.message}!</p>
    `;
  }
}
customElements.define('my-element', MyElement);
