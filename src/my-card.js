import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "New Vid!";
    this.image = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png";
    this.link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        background-color:pink;
        width: 150px;
        border:solid;
        border-color:cyan;
      }
      img{
        width:150px;
      }
      div h1{
        text-align:center;
        font-size:20px;
      }
      div, a{
        text-align:center;
        text-decoration:none;
        color:black;
      }
      a:hover{
        color:red;
        cursor:not-allowed;
      }
    `;
  }

  render() {
    return html`
      <div>
      <img src="${this.image}"/>

      <h1>${this.title}</h1>

      <a href="${this.link}">Please Click Me!</a>
      

      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
