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

  ngOnInit() {
  }

  openModal(){
    /* this.modalAberto = "block"; */
    this.openModalEvent.emit(this.fotoindex);
  }

  closeModal() {
    this.modalAberto.status = "none";
  }

  @HostListener('window:keydown', ['$event'])
  closeModalEsc(event: KeyboardEvent) {

    event.preventDefault();
    event.stopPropagation();

    this.keyCode = event.keyCode
    
    if(this.keyCode == 27)
      this.closeModal();
  
    }
}
