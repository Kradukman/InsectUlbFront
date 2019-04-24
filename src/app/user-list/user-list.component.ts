import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  edit = false;
  usersFormGroup: FormGroup;
  users = [
    {
      id: 0,
      lastName: 'Dauphin',
      firstName: 'Guillaume',
      email: 'guillaumedau@gmail.com',
      active: true,
      staff: false,
      editMode: true
    },
    {
      id: 1,
      lastName: 'Weekers',
      firstName: 'Timothy',
      email: 'Tw@gmail.com',
      active: true,
      staff: true,
      editMode: false
    },
    {
      id: 2,
      lastName: 'Savarin',
      firstName: 'Brillat',
      email: 'Hun@gmail.com',
      active: true,
      staff: false,
      editMode: false
    },
  ] 
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.usersFormGroup = new FormGroup({
      formArray: new FormArray([])
    });
        // push all users in formArray
    this.users.forEach((user) => {
      var newFormGroup = new FormGroup({
        'id': new FormControl(user.id),
        'firstName': new FormControl(user.firstName, Validators.required),
        'lastName': new FormControl(user.lastName),
        'email': new FormControl(user.email, Validators.email),
        'active': new FormControl(user.active),
        'staff': new FormControl(user.staff)
      });
      (<FormArray>this.usersFormGroup.get('formArray')).push(newFormGroup);
    }); 
    console.log(this.usersFormGroup.get('formArray'));
  }

  onModifyUser(userId){
    this.router.navigate(['modify'], {relativeTo: this.route});
  }

  editToTrue(id){
    this.users[id].editMode = true;
  }

  editToFalse(id){
    // Connection to DB to save
    // if error -> display erro
    // else quit edit mode
    this.users[id].editMode = false;
  }

  toggleEdit(){
    this.edit = !this.edit;
    var newValue = this.edit;
    this.users.forEach(function(value){
      console.log(value);
      value.editMode = newValue;
    })
  }

  addUserFormGroup(){
    var newFormGroup = new FormGroup({
      'id': new FormControl(null),
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'email': new FormControl(null),
      'active': new FormControl(false),
      'staff': new FormControl(false)
    });
    (<FormArray>this.usersFormGroup.get('formArray')).push(newFormGroup);
  }

  getEditMode(id){
    return this.users[id].editMode;
  }
}
