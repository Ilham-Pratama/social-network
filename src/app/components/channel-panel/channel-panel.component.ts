import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/app.interface';

@Component({
  selector: 'app-channel-panel',
  templateUrl: './channel-panel.component.html',
  styleUrls: ['./channel-panel.component.css']
})
export class ChannelPanelComponent implements OnInit {
  @Input() channels!: Channel[];
  constructor() { }

  ngOnInit(): void {
  }

}
