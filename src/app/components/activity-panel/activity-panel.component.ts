import { Component, Input, OnInit } from '@angular/core';
import { activities } from 'src/app/app.constants';
import { ActionCode, Activity } from 'src/app/app.interface';

@Component({
  selector: 'app-activity-panel',
  templateUrl: './activity-panel.component.html',
  styleUrls: ['./activity-panel.component.css']
})
export class ActivityPanelComponent implements OnInit {
  @Input() title: string = '';
  @Input() browseAllLink: string = '#';
  @Input() browseAllLabel: string = 'Browse All';
  @Input() activities: Activity[] = activities;

  activeIndex: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setActiveIndex(id: number) {
    this.activeIndex = id;
  }

  getMessage(code: ActionCode) {
    if (code === ActionCode.COMMENTED) {
      return 'commented'
    } else if (code === ActionCode.LIKED_A_VIDEO) {
      return 'liked a video'
    } else if (code === ActionCode.SHARED_A_DOCUMENT) {
      return 'shared a document'
    } else if (code === ActionCode.SHARED_A_VIDEO) {
      return 'shared a video'
    } else {
      return 'unlocked a badge'
    }
  }

  getIcon(code: ActionCode) {
    if (code === ActionCode.COMMENTED) {
      return 'chat_bubble'
    } else if (code === ActionCode.LIKED_A_VIDEO) {
      return 'favorite'
    } else if (code === ActionCode.SHARED_A_DOCUMENT) {
      return 'description'
    } else if (code === ActionCode.SHARED_A_VIDEO) {
      return 'videocam'
    } else {
      return 'badge'
    }
  }

}
