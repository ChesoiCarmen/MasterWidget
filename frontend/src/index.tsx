import React from 'react';
import ReactDOM from 'react-dom';
import Operators from "./App";
import retargetEvents from "react-shadow-dom-retarget-events";

class OperatorsComponent extends HTMLElement {
  static get observedAttributes() {
    return [];
  }

  mountPoint: HTMLSpanElement;

  createElement() {
    return React.createElement(Operators, {}, React.createElement('slot'));
  }

  connectedCallback() {
    this.mountRoot();
    this.attributeChangedCallback();
  }

  private mountRoot() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    retargetEvents(shadowRoot);
    shadowRoot.appendChild(this.mountPoint);
    return shadowRoot;
  }

  attributeChangedCallback() {
    if (this.mountPoint) {
      ReactDOM.render(this.createElement(), this.mountPoint);
    }
  }
}

window.customElements.define('man-operators', OperatorsComponent);
