class HelloWorld extends HTMLElement {
    connectedCallback() {
        this.textContent = 'Hello, World!';
    }
}

customElements.define('srdkn-hello-world', HelloWorld);