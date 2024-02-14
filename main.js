

class TodoPaper extends HTMLElement {
    static name = 'todo-paper';
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'})
    }

    static create(){
        customElements.define(this.name, this)
    }
}





  