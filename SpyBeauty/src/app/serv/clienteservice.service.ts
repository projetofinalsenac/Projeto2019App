import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteserviceService {
protected cliente: Cliente = new Cliente();

  constructor(protected db:AngularFirestore) { }

save(cliente: Cliente){
  return this.db.collection('clientes').add({
    nome: cliente.nome,
    sobrenome: cliente.sobrenome,
    email: cliente.email,
    cpf: cliente.cpf,
    telefone: cliente.telefone,
    senha: cliente.senha,
    status: "Cliente"
  }
    
    )
  };

  getencontro(){
    
  }
}


