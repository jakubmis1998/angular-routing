import { Component, OnInit } from '@angular/core';
import { Car } from './cars.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) {
    this.cars = this.carService.getCars();
  }

  ngOnInit(): void {
  }

}
