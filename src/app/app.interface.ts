export interface Post {
  author: string;
  coverImg: string;
  viewCount?: number;
}

export interface MainPost extends Post {
  title: string;
}

export interface Activity {
  id: number;
  author: string;
  actionCode: ActionCode;
  detail: string;
  timestamp: string;
}

export interface Channel {
  name: string;
  img: string;
}

export enum ActionCode {
  COMMENTED,
  SHARED_A_VIDEO,
  SHARED_A_DOCUMENT,
  UNLOCKED_A_BADGE,
  LIKED_A_VIDEO
}
