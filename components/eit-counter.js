import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement{
    static styles=[
        css`
            :host {
                display:inline-block;
                padding:1em;
                border:1px solid blue;
            }
            slot{
                
                color:red;
            }
            .parrafo{
                color:blue;
                font-size:1.5em;
            }
        `
    ];

    static properties={
        counter:{ type:Number }
    }
    
    constructor(){
        super();
        this.counter = 30 
    }
    

    render(){
        return html`
            <slot></slot>
            <p class="parrafo">${this.counter}</p>
        `;
    }
}
customElements.define('eit-counter',EitCounter);