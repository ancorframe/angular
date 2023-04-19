import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public title!: string;
  constructor() {}
  public setTitle(name: string): void {
    this.title = name;
  }
}
