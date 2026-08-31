import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'; //otimização do carregamento de imagens

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
