import { Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styles: [
  ]
})
export class NabvarComponent implements OnInit, DoCheck{
  miAuth: boolean;
  constructor(public auth: AuthService) {
    this.miAuth = false;
  }

  ngOnInit(): void {
  }

  /* ngOnChanges(): void{
    console.log(33333333);
  } */

  ngDoCheck(): void {
    this.auth.isAuthenticated$.subscribe(r => {
      this.miAuth = r;
      console.log(r);
    });
  }



}
