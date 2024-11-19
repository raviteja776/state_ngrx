import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(private store:Store<any>) {
    
  }
  updateName(name:any) {
    this.store.dispatch({type:'updateName', payload:{name:name.value}});
  }
  updateEmail(email:any) {
    this.store.dispatch({type:'updateEmail', payload:{email:email.value}});
  }
  updateMobile(mobile:any) {
    this.store.dispatch({type:'updateMobile', payload:{mobile:mobile.value}});
  }
}
