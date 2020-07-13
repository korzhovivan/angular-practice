import { Component } from '@angular/core';
import {DataService} from '../shared/data.service'

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(public dataService: DataService) { }

  go(dir: number){
    this.dataService.changeMonth(dir)
  }
}
