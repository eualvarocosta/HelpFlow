import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { msgService } from '../../services/msg.service';
import { signal } from '@angular/core';

@Component({
  imports: [
    BtnPrimary,
    ReactiveFormsModule
  ],
  providers: [
    msgService
  ],
  selector: 'app-form',
  styleUrl: './form.scss',
  templateUrl: './form.html',
})
export class Form {
  msg!: FormGroup;
  loading = signal(false);

  constructor(private service: msgService) {
    this.msg = new FormGroup({
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
    });
  }

  onSubmit(){
    this.loading.set(true);
    if(this.msg.valid){
      this.service.sendData(this.msg.value.name, this.msg.value.email).subscribe({
        next: () => {
          this.msg.reset();
          this.loading.set(false);
        }
      })
    }
  }


}
