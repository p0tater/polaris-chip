import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */
//DUPLICATOR
document.querySelector('#duplicate').addEventListener('click',(e)=>{
  const newCard = document.querySelector('my-card').cloneNode(true);

  document.querySelector('#container').appendChild(newCard);


});

//Toggle Backgrounds

document.querySelector('#background').addEventListener('click',(e) =>{
  const bgColorList = document.querySelectorAll('my-card');

bgColorList.forEach(card=> card.classList.toggle('fancy'))
        
});

//Change Title
document.querySelector('#title-change').addEventListener('click',(e) =>{

  const titleList = document.querySelectorAll('my-card');
  
  titleList.forEach(card=> card.title = 'RAAAAAAH');

 //document.querySelector('my-card').title = 'RAAAAAAH';
        
});

//Change Image

document.querySelector('#image-change').addEventListener('click',(e) =>{

  const imageList = document.querySelectorAll('my-card');

  imageList.forEach(card=> card.image = 'https://uploads.dailydot.com/2024/08/bruh.jpg');

  //document.querySelector('my-card').image = 'https://uploads.dailydot.com/2024/08/bruh.jpg'; 
         
 });

 //Delete Cards!

 document.querySelector('#delete').addEventListener('click',(e) => {
  let cardList = document.querySelectorAll('my-card');
  if(cardList.length > 1){
    cardList[cardList.length - 1].remove();
  }
});

export class MyCard extends LitElement {


  static get tag() {
    return 'my-card';
  }
  //Constructor required! (applies defaults)
  constructor() {
    super();
    this.title = "New Vid!";
    this.image = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png";
    this.link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    this.fancy = false;
    this.description = "boom bam, generic description";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        background-color:pink;
        width: 300px;
        border:solid;
        border-color:cyan;
        margin: 5px;
        height: 375px;
        border: 2px solid transparent;
      }

      :host([fancy]) {
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;

      }

    
     
      div h1{
        text-align:center;
        font-size:20px;
        overflow: auto;
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

      details summary{
      text-align: left;
      font-size: 20px;
      padding: 8px 0;
      }

      details[open] summary{
        font-weight: bold;
          }
  
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
          }

      
        meme-maker{
          width: 300px;
          height: 200px;
        }
      
    `;
  }
//@click= <img src="${this.image}"/>
  render() {
    return html`
      <div>
      <meme-maker
      image-url= ${this.image}  
      bottom-text="work"
      top-text="please">
      </meme-maker>
      <h1>${this.title}</h1>

      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
        <button> <a href="${this.link}">Please Click Me!</a> </button>
      </details>

      </div>`;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
