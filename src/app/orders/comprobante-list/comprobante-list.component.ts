import { Component, OnInit, Input } from '@angular/core';
import { Comprobante } from '../../models/comprobante.model';

@Component({
  selector: 'app-comprobante-list',
  templateUrl: './comprobante-list.component.html',
  styleUrls: ['./comprobante-list.component.css']
})
export class ComprobanteListComponent implements OnInit {
  @Input() comprobanteList: Comprobante[];

  constructor() { }

  ngOnInit() {
  }

  pad (str, max) {
    str = str.toString();
    return str.length < max ? this.pad("0" + str, max) : str;
  }
  getComprobante (comprobante: Comprobante) { 
    return comprobante.tipo + '-' + comprobante.serie+ '-' +this.pad(comprobante.numero.toString(),4);
  }

}
