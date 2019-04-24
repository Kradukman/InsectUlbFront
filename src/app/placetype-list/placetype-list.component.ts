import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { PlaceService } from '../shared/place.service';

@Component({
  selector: 'app-placetype-list',
  templateUrl: './placetype-list.component.html',
  styleUrls: ['./placetype-list.component.css']
})
export class PlacetypeListComponent implements OnInit {
  edit = false;
  placeTypeFormGroup: FormGroup;
  placeTypes = [];
  //, {'id':2, 'name':'champ', 'editMode': false}

  constructor(private placeService: PlaceService) { 
  }

  ngOnInit() {
    console.log('on init');
    this.placeTypeFormGroup = new FormGroup({
      formArray: new FormArray([])
    });
        // push all users in formArray
    this.placeService.listPlaceType().subscribe(
      data => {
        data.forEach((placeType) => {
          this.placeTypes.push({'editMode': false});
          var newFormGroup = new FormGroup({
            'id': new FormControl(placeType.id),
            'name': new FormControl(placeType.name, Validators.required),
          });
          (<FormArray>this.placeTypeFormGroup.get('formArray')).push(newFormGroup);
        }); ;
        console.log(this.placeTypes);
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.placeTypeFormGroup.get('formArray'));
    
    
  }

  editToTrue(id){
    this.placeTypes[id].editMode = true;
  }

  editToFalse(id){
    // Connection to DB to save
    // if error -> display erro
    // else quit edit mode
    // check if exist in db
    // if exist -> update
    // else post
    this.placeService.addPlaceType(this.placeTypeFormGroup.get('formArray').controls[id].controls.name.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    this.placeTypes[id].editMode = false;
  }

  toggleEdit(){
    this.edit = !this.edit;
    var newValue = this.edit;
    this.placeTypes.forEach(function(value){
      console.log(value);
      value.editMode = newValue;
    })
  }

  addPlaceTypeFormGroup(){
    this.placeTypes.push({'editMode':true});
    var newFormGroup = new FormGroup({
      'id': new FormControl(null),
      'name': new FormControl(null)
    });
    (<FormArray>this.placeTypeFormGroup.get('formArray')).push(newFormGroup);
  }

  getEditMode(id){
    return this.placeTypes[id].editMode;
  }
}
