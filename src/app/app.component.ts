import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user:any;

  constructor(private store:Store<any>) {
    this.store.select('user').subscribe((sobj) => {
      this.user = sobj;
      console.log(this.user); 
    });
  }

  title = 'state_wostalone';
}
