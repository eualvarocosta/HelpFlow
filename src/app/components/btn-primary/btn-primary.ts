import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type BtnVariants = "primary" | "secondary"

@Component({
  imports: [
    CommonModule
  ],
  selector: 'btn-primary',
  styleUrl: './btn-primary.scss',
  templateUrl: './btn-primary.html',
})
export class BtnPrimary {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Output("submit") onSubmit = new EventEmitter(); 

  submit(){
    this.onSubmit.emit();
  }

}
