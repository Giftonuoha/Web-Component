class TodoList extends TodoPaper{
    static name = 'todo-list' 
    connectedCallback(){
        this.shadow.innerHTML = `
        <slot></slot>

        `
    }

}
TodoList.create()