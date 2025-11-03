class NamaNim extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        .nama {
          border: 1px solid #000;
          padding: 12px;
          font-family: sans-serif;
          background-color: #f0f0f0;
          width: 300px;
        }
        .label {
          font-weight: bold;
          margin-bottom: 4px;
        }
        .value {
          margin-bottom: 8px;
        }
      </style>
      <div class="nama">
        <div class="label">Name:</div>
        <div class="value">Freta Yordinia Laura</div>
        <div class="label">NIM:</div>
        <div class="value">24/533444/PA/22576</div>
      </div>
    `;
  }
}

customElements.define('nama-nim', NamaNim);
