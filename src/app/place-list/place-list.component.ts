import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places = [{
    'name': 'jardin guigui',
    'type': 'jardin',
    'town': 'saint-gilles',
    'codeSite': '6565',
    'comment': 'on mange bien',
    'latLamb72': 111.11,
    'lonLamb72': 5.4,
    'latDec': 20,
    'lonDec': 10
  }];
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onAddPlace(){
    this.router.navigate(['add'], {relativeTo: this.route});
  }
}
