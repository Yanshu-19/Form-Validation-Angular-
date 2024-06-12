import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { HttpService } from './http.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, MatInputModule, MatSelectModule, ReactiveFormsModule, CommonModule, MatButtonModule, RouterLink, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(){
    this.userForm = new FormGroup({
      agencyName: new FormControl("",[Validators.required]),
      agencyDBA: new FormControl("",[Validators.required]),
      agencyType: new FormControl("",[Validators.required]),
      agencyAcry: new FormControl("",[Validators.required]),
      agencySAP: new FormControl("",[Validators.required]),
      agencyNTD: new FormControl("",[Validators.required]),
      agencyUEI: new FormControl("",[Validators.required]),
      agencyFEIN: new FormControl("",[Validators.required]),
      agencyWebsite: new FormControl("",[Validators.required]),
      agencyLogo: new FormControl("")
    })
  }

  httpService=inject(HttpService);
  users:any[]=[];
  ngOnInit(){
    this.httpService.getUser().subscribe((result:any)=>{
      this.users=result;
      console.log(this.users);
    })
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userForm.controls['agencyLogo'].setValue(reader.result);
    };
  }

  saveUser(){
    var formValues = this.userForm.value;
    console.log("form saved", formValues);
    this.isFormSubmitted = true;
    this.httpService.addUser(formValues).subscribe(()=>{
      alert("Form Submitted");
      this.userForm.reset();
    })
  }
}
