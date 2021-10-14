import { Component, OnInit } from '@angular/core';
import {
  channels,
  documents,
  mainDocument,
  mainPerson,
  mainVideo,
  people,
  videos,
} from '../../app.constants';
import { Channel, MainPost, Post } from '../../app.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  videos: Post[] = videos;
  mainVideo: MainPost = mainVideo;
  people: Post[] = people;
  mainPerson: MainPost = mainPerson;
  documents: Post[] = documents;
  mainDocument: MainPost = mainDocument;
  channels: Channel[] = channels;

  constructor() {}

  ngOnInit(): void {}
}
