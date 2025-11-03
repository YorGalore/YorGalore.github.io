class CombinedCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const title = this.getAttribute('title') || 'Counter';
    const value = parseInt(this.getAttribute('value')) || 0;

    this.shadowRoot.innerHTML = `
      <style>
        .wrapper {
          border: 2px solid #333;
          border-radius: 8px;
          padding: 10px;
          background: #fafafa;
        }

        .wrapper:hover {
            transform: translateY(-2px);     
        }
        
        counter-display {
          display: block;
        }
      </style>
      
      <div class="wrapper">
        <counter-display id="display" title="${title}" value="${value}"></counter-display>
        <counter-controls id="controls"></counter-controls>
      </div>
    `;
  }

  connectedCallback() {
    const display = this.shadowRoot.getElementById('display');
    const controls = this.shadowRoot.getElementById('controls');

    controls.addEventListener('count-change', e => {
      display.count += e.detail.delta;
    });
  }
}

customElements.define('combined-counter', CombinedCounter);
