import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from '../btn-primary/btn-primary'; //componente do botão
import { Form } from '../form/form'; //componente do formulário de contato

@Component({
  imports: [Header, 
    NgOptimizedImage, 
    BtnPrimary,
    Form
  ],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
