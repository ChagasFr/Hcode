import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-tiltes',
  templateUrl: './list-tiltes.component.html',
  styleUrls: ['./list-tiltes.component.scss']
})
export class ListTiltesComponent  implements OnInit {

  @Input() title: string;
  @Input() list = [];

  constructor() {
  }
  ngOnInit() {
  }
}
