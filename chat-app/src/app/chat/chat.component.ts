import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [UsuarioComponent,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
// este va aser el padre del usuario y el padre de este va a ser el app component, este va a contener usario por 2 y el padre de este solo va a llamarlo para mostrar todo junto
// almacenara los mensajes de cada usario en un array
mensajes: {usuario: string, texto: string}[] = [];

agregarMensajePepe(mensaje: string) {
  this.mensajes.push({usuario: 'Pepe', texto: mensaje});
}

agregarMensajeMaria(mensaje: string) {
  this.mensajes.push({usuario: 'María', texto: mensaje});
}
}
