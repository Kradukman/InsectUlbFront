import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  forms = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      // retrieve user info
      // currently mocking this
      
    }
  }

}
