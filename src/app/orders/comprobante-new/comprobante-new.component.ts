import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { PeopleService } from '../../shared/services/people.service';
import { Producto } from '../../models/producto.model';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoComprobante } from '../../models/tipo_comprobante';
import { Serie } from '../../models/serie';
import { Comprobante } from '../../models/comprobante.model';
import { Comprobante_Producto } from '../../models/comprobante_producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobante-new',
  templateUrl: './comprobante-new.component.html',
  styleUrls: ['./comprobante-new.component.css']
})
export class ComprobanteNewComponent implements OnInit {
  @ViewChild('formProducto') formProducto: NgForm;
  @ViewChild('formComprobante') formComprobante: NgForm;

  @ViewChild('cliente') txtcliente: ElementRef;
  @ViewChild('tipo') txttipo: ElementRef;
  @ViewChild('serie') txtserie: ElementRef;
  @ViewChild('numero') txtnumero: ElementRef;

  @Input() productoList: Array<Producto>;
  @Input() tipoComprobanteList: Array<TipoComprobante>;
  @Input() serieList: Array<Serie>;


  personForm: FormGroup;
  Comprobante: Comprobante;

  constructor(private peopleService: PeopleService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loadProducto();
    this.loadDefault();
    this.buildForm();
  }

  buildForm() {
    this.personForm = this.fb.group({
      cliente: ['', Validators.required],
      tipo: ['', Validators.required],
      numero: ['', [Validators.required]],
      serie: ['', Validators.required],
      importe: ''
    });
  }



  onSubmit({ value, invalid }: { value: Producto, invalid: boolean }) {
    if (invalid) {
      return;
    }
    value.total = value.precio * value.cantidad;
    this.peopleService.saveProducto(value).subscribe(() => {
      this.loadProducto();
    });
  }


  loadProducto() {
    this.peopleService.listProducto().subscribe(producto => {
      this.productoList = producto;
      this.peopleService.listcomprobante_Producto().subscribe(com => {
        com.forEach(c => {
          producto = this.productoList.filter(prod => prod.id !== c.id_producto);
          this.productoList = producto;
        });
      });
    });
  }

  loadDefault() {
    this.peopleService.listSerie().subscribe(serie => {
      this.serieList = serie;
    });
    this.peopleService.listTipoComprobante().subscribe(TipoCom => {
      this.tipoComprobanteList = TipoCom;
    });
  }


  btnSave() {

    this.personForm.value.cliente = this.txtcliente.nativeElement.value;
    this.personForm.value.tipo = this.txttipo.nativeElement.value;
    this.personForm.value.numero = this.txtnumero.nativeElement.value;
    this.personForm.value.serie = this.txtserie.nativeElement.value;
    var total = 0;
    this.productoList.forEach(p => {
      total += p.total
    });
    this.personForm.value.importe = total;

    const Comprobante: Component = { ...this.personForm.value };

    var comprobanteProducto: Comprobante_Producto = {};

    this.peopleService.saveComprobante(Comprobante).subscribe(comp => {
      comprobanteProducto.id_comprobante = comp.id;
      this.productoList.forEach(producto => {
        comprobanteProducto.id_producto = producto.id;
        this.peopleService.saveComprobanteProducto(comprobanteProducto).subscribe(cp => {
          this.router.navigate(['orders']);
        });
      });
    });
  }

  deleteProducto(producto){
    this.peopleService.deleteProducto(producto.id).subscribe(p => {
      this.loadProducto();
    });

  }
}
