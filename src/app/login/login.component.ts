import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeopleService } from '../shared/services/people.service';
import { Router } from '@angular/router';
import { Usuarios } from '../models/usuarios.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuariosList: Usuarios[] = [];
  @ViewChild('f') form: NgForm;
  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit({ value, invalid }: { value: Usuarios, invalid: boolean }) {

    if (invalid) {
      return;
    }

    this.peopleService.LoginUser().subscribe(listaUsuarios => {
      this.usuariosList = listaUsuarios.filter(x => x.user == value.user && x.password == value.password);
      if (this.usuariosList.length > 0) {
        this.router.navigate(['orders']);
      } else {
        alert("Error");
      }
    });

    

  }

}
