import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
