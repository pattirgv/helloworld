import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    Fullname="Zero to Hero"
    title="aura"
    changerHandler(event){
        this.title=event.target.value
    }

}
