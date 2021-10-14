import { Component, Input, OnInit } from '@angular/core';
import { MainPost, Post } from '../../app.interface';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() title: string = '';
  @Input() posts: Post[] = [];
  @Input() mainPost!: MainPost;
  @Input() browseAllLink: string = '#';
  @Input() browseAllLabel: string = 'Browse All';
  @Input() uploadLabel: string = 'Upload here';
  @Input() uploadIcon: string = 'file_upload';


  constructor() { }

  ngOnInit(): void {
    if (!this.mainPost) {
      throw new Error('Main post is required');
    }
  }

}
