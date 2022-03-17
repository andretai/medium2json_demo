import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {

  // Output change event for username.
  @Output() usernameChangeEvent = new EventEmitter();

  // Primary display data.
  userInput = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
  })
  
  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    const newUsername = this.userInput.get('username')?.value
    if (newUsername.length >= 3 && newUsername <= 30) {
      this.usernameChangeEvent.emit({ newUsername: newUsername })
    }
  }

}
