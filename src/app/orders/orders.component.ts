import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/services/people.service';
import { Comprobante } from '../models/comprobante.model';
import { Router } from '@angular/router';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  comprobanteList: Comprobante[] = [];
  constructor(private peopleService: PeopleService,
    private router: Router) {
    this.listComprobante();
   }

  listComprobante () {
    this.peopleService.listComprobante().subscribe(comprobante => {
      this.comprobanteList = comprobante;
    });
  }

  ngOnInit() {
  }

}
