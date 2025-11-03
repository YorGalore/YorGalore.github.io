class CounterControls extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = `
            <style>
                .controls {
                    display: flex;
                    border: 2px solid #333;
                    border-radius: 8px;
                    overflow: hidden;
                    width: 140px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                button {
                    flex: 1;
                    background: linear-gradient(135deg, #e0e0e0, #bdbdbd);
                    border: none;
                    font-size: 1.4rem;
                    cursor: pointer;
                    height: 40px;
                    font-weight: bold;
                    transition: all 0.2s;
                }
                button:hover {
                    background: linear-gradient(135deg, #bdbdbd, #9e9e9e);
                    transform: scale(1.05);
                }
                button:active {
                    transform: scale(0.95);
                }
                button:not(:last-child) {
                    border-right: 2px solid #333;
                }
                    
            </style>
            <div class="controls">
                <button id="minus">−</button>
                <button id="plus">+</button>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.getElementById('plus')
            .addEventListener('click', () => this.emitChange(1));
        this.shadowRoot.getElementById('minus')
            .addEventListener('click', () => this.emitChange(-1));
    }

    emitChange(delta) {
        this.dispatchEvent(new CustomEvent('count-change', {
            detail: { delta },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('counter-controls', CounterControls);