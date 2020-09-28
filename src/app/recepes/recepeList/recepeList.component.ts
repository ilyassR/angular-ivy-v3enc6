import { Component } from '@angular/core';
import { Recepe } from '../recepe.model';

@Component({
  selector: 'app-recepeList',
  templateUrl: './recepeList.component.html',
  styleUrls: ['./recepeList.component.css']
})
export class RecepeListComponent {
  recepes: Recepe[] = [
    new Recepe('name1', 'description1', 'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg'),
    new Recepe('name2', 'description2', 'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg')
  ];

}