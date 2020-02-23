import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icon/iron-icon.js";

class IconToggle extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        :host {
          display: inline-block;
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-pressed-fill, currentcolor);
        }
        iron-icon {
          fill: var(--icon-toggle-fill, rgba(0, 0, 0, 0));
          stroke: var(--icon-toggle-stroke, currentcolor);
          stroke-width: 1px;
        }
        iron-icon:hover{
          cursor: pointer;
        }
      </style>


      <iron-icon icon=[[toggleIcon]] on-click='toggle'></iron-icon>
    `;
  }

  static get properties(){
    return {
      toggleIcon:{
        type: String
      },
      pressed:{
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    }
  }

  constructor(){
    super(),
    this.addEventListener('click', this.toggleAttribute.bind(this))
  }

  toggle(){
    this.pressed = !this.pressed
  }
}

customElements.define("icon-toggle", IconToggle);
