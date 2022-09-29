import { Alunos } from './../core/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }
  list(): Alunos[] {
    return[
      {id: 1, nomealuno: 'Miguel'},
      {id: 2, nomealuno: 'Vinicius'},
      {id: 3, nomealuno: 'Ayron'},
      {id: 4, nomealuno: 'João'}
    ]
  }
}
