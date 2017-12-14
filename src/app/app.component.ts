import { Component} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  fotos:any[]; 
  fotoindex:number = 0;
  modalStatus: any = {'status': 'none'};

  ngOnInit(): void{
    this.fotos = [{'path': '../../assets/test.png', 'legenda':'In Rainbows'},
    {'path': '../../assets/rh.jpg', 'legenda':'In Rainbows'},
    {'path': '../../assets/test.png', 'legenda':'In Rainbows'},
    {'path': '../../assets/rh.jpg', 'legenda':'In Rainbows'},
    {'path': '../../assets/test.png', 'legenda':'In Rainbows'},
    {'path': '../../assets/rh.jpg', 'legenda':'In Rainbows'},
    {'path': '../../assets/test.png', 'legenda':'In Rainbows'},
    {'path': '../../assets/rh.jpg', 'legenda':'In Rainbows'},
    {'path': '../../assets/test.png', 'legenda':'Teste Mac'} ];
  }

  openModal(event){
    
    this.fotoindex = event;
    this.modalStatus.status = 'block';
  
  }
}
