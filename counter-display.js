class CounterDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title') || 'Counter';
        this.value = parseInt(this.getAttribute('value')) || 0;
        
        this.shadowRoot.innerHTML = `
            <style>
                .display {
                    background: linear-gradient(135deg, #f8a8a8, #ff8a80);
                    padding: 12px;
                    border: 2px solid #d32f2f;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    transition: sans-serif;
                }

                .display:hover {
                    transform: translateY(-2px);
                }

                .title { 
                    font-size: 0.9rem;
                    font-weight: 600; 
                    margin-bottom: 8px;
                    color: #880e4f;
                }
                    
                .value{
                    font-size: 1.rem;
                }

                .number { 
                    font-size: 1.5rem; 
                    font-weight: bold; 
                    color: #c62828;
                    font-style: italic;
                }

            </style>
            <div class="display">
                <div class="title">${this.title}</div>
                <div class="value">Value: <span class="number">${this.value}</span></div>
            </div>
        `;
    }

    set count(val) {
        this.value = val;
        this.shadowRoot.querySelector('.number').textContent = val;
    }

    get count() {
        return this.value;
    }
}

customElements.define('counter-display', CounterDisplay);