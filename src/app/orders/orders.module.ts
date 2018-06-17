import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComprobanteListComponent } from './comprobante-list/comprobante-list.component';
import { ComprobanteDetalleComponent } from './comprobante-detalle/comprobante-detalle.component';
import { ComprobanteNewComponent } from './comprobante-new/comprobante-new.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: 'detalle/:id',
    component: ComprobanteDetalleComponent
  },
  {
    path: 'new',
    component: ComprobanteNewComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OrdersComponent,
    ComprobanteListComponent,
    ComprobanteDetalleComponent,
    ComprobanteNewComponent
  ]
})
export class OrdersModule { }
