
class Form {
    constructor ({el,onSubmit}){
        this.el = el;
        this.callback = onSubmit;
        this._initEvents();

    }
    render (){
        this.el.innerHTML= `
        <form class="form">
            <textarea name="message"></textarea>
            <input class="form_btn" type="submit" value="Send message">
         
        </form>
        `;
    }

    _initEvents(){
        this.el.addEventListener('submit',this._onSubmit.bind(this));
    }
    _onSubmit(event){
        event.preventDefault();
        const el=event.target;
        const message = el.querySelector('[name ="message"]').value;
        this.callback(message);
        el.reset();
    }

    hideForm() {
        this.el.innerHTML='';
    }

}