import { Component } from '@angular/core';
import { Recepe } from '../recepe.model';

@Component({
  selector: 'app-recepeList',
  templateUrl: './recepeList.component.html',
  styleUrls: ['./recepeList.component.css']
})
export class RecepeListComponent {
  recepes: Recepe[] = [
    new Recepe('name1', 'description1', 'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13-1500x1125.jpg', true),
    new Recepe('name2', 'description2', 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_12:9/k%2FPhoto%2FRecipes%2F2020-02-Kielbasa-and-Cabbage-Skillet%2Fkielbasa2', false)
  ];

}