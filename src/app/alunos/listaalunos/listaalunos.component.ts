import { AlunosService } from './../alunos.service';
import { Alunos } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {

  alunos: Alunos[] = []
  displayedColumns = ['id', 'nomealuno']


  constructor(private AlunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.AlunosService.list();
  }

}
