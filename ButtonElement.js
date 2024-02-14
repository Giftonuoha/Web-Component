class ButtomElement extends TodoPaper{
    static name = 'button-element' 
    connectedCallback(){
        this.shadow.innerHTML = `
        <slot></slot>

        `
    }

}
ButtomElement.create()