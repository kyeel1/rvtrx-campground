import { Component, OnInit, Input } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-featured-lodging',
  templateUrl: './featured-lodging.component.html',
  styleUrls: ['./featured-lodging.component.scss'],
})
export class FeaturedLodgingComponent implements OnInit {
  @Input() featuredLodgings: Lodging[];

  constructor() {}

  ngOnInit(): void {

    this.setFeaturedLodgings();

  
  }

  setFeaturedLodgings(): void {
    let lodgings: Lodging[] ;

    for (let index = 0; index < this.featuredLodgings.length; index++) {
      if(this.featuredLodgings[index].reviews)
      {
          lodgings.push(this.featuredLodgings[index]);
      }
        
      }

      this.featuredLodgings = lodgings;
      
    }

  
}

