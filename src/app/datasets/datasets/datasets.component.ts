import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
  changeImage: boolean;
  cardhover: boolean;
  constructor() { this.changeImage = false;
                  this.cardhover = false;
  }

  ngOnInit() {
  }

}
