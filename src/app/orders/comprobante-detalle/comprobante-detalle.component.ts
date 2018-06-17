import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Comprobante } from '../../models/comprobante.model';
import { Producto } from '../../models/producto.model';
import { PeopleService } from '../../shared/services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comprobante_Producto } from '../../models/comprobante_producto.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comprobante-detalle',
  templateUrl: './comprobante-detalle.component.html',
  styleUrls: ['./comprobante-detalle.component.css']
})
export class ComprobanteDetalleComponent implements OnInit {
  @Input() productoList: Array<Producto>;
  @Input() comprobanteProductoList: Comprobante_Producto[];
  @Input() comprobanteList: Comprobante;
  id;cliente;comprobante;
    
  constructor(private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id = +this.route.snapshot.params['id'];
     }

  ngOnInit() {
    this.loadProducto();
    this.loadComprobante();
  }

  loadProducto() {
    this.productoList = new Array<Producto>();
    this.peopleService.listcomprobante_Producto().subscribe(comprobante_producto => {  
      this.comprobanteProductoList = comprobante_producto.filter(x => x.id_comprobante === this.id);
      this.comprobanteProductoList.forEach(y => {
        this.peopleService.listProductoId(y.id_producto).subscribe(producto =>{
          this.productoList.push(producto);
        });     
    });
  });
}

pad (str, max) {
  str = str.toString();
  return str.length < max ? this.pad("0" + str, max) : str;
}

loadComprobante(){
   this.peopleService.listComprobanteId(this.id).subscribe(comprobante => { 
   this.comprobanteList = comprobante;
   this.cliente =this.comprobanteList.cliente;
   this.comprobante =this.comprobanteList.tipo +'-' +this.comprobanteList.serie +'-' +this.pad(this.comprobanteList.numero.toString(),4);
  }); 
}
}
