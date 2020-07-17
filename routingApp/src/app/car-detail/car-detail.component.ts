import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../cars/cars.model';
import { CarService } from '../car.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.car = this.carService.getCar(params.name);
    })
  }

}
