import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() foto: String;
  @Input() legenda: String;
  @Input() fotoindex: number;
  @Output() openModalEvent: EventEmitter<any> = new EventEmitter<any>();
  keyCode: number;
  modalAberto: any;

  constructor() { }

  ngOnInit() {}

  openModal(){
    this.openModalEvent.emit(this.fotoindex);
  }

  closeModal() {
    this.modalAberto.status = "none";
  }

}
