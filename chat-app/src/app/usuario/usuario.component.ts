import { CommonModule } from '@angular/common';
import {  Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'] 
})
export class UsuarioComponent {

  @Input() nombreUsuario: string = '';
  @Input() mensajes: string[] = [];
  @Output() nuevoMensaje = new EventEmitter<string>();

  mensajeActual: string = '';

  enviarMensaje() {
    if (this.mensajeActual.trim() !== '') {
      this.nuevoMensaje.emit(this.mensajeActual);
      this.mensajeActual = '';
    }
  }
}
