import { Injectable } from '@angular/core';
import { Car } from './cars/cars.model';
import { CARS } from './cars/mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = [];

  constructor() {
    this.cars = CARS;
  }

  getCars(): Car[] {
    return this.cars;
  }

  getCar(name: string): Car {
    return this.cars.filter(
      x => x.name == name
    )[0];
  }
}
