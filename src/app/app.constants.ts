import { ActionCode, Activity, Channel, MainPost, Post } from './app.interface';

export const videos: Post[] = [
  {
    author: 'Ahmed Hassan',
    coverImg: '',
    viewCount: 12302,
  },
  {
    author: 'John Doe',
    coverImg: '',
    viewCount: 2324,
  },
  {
    author: 'John Alfred',
    coverImg: '',
    viewCount: 2324,
  },
  {
    author: 'Mike Brendon',
    coverImg: '',
    viewCount: 5462,
  },
];

export const mainVideo: MainPost = {
  author: 'Waseem Arshad',
  coverImg: '',
  viewCount: 29302,
  title: 'How to Improve your skills',
};

export const people: Post[] =  [
  {
    author: 'Ahmed Hassan',
    coverImg: ''
  },
  {
    author: 'John Doe',
    coverImg: ''
  },
  {
    author: 'John Alfred',
    coverImg: ''
  },
  {
    author: 'Mike Brendon',
    coverImg: ''
  },
];

export const mainPerson: MainPost = {
  author: 'Waseem Arshad',
  coverImg: '',
  title: 'User Interface Designer',
};


export const documents: Post[] =  [
  {
    author: 'HTML5 Guide',
    coverImg: '',
    viewCount: 12302,
  },
  {
    author: 'How to become an expert?',
    coverImg: '',
    viewCount: 2324,
  },
  {
    author: 'Modern UI Guide',
    coverImg: '',
    viewCount: 2324,
  },
  {
    author: 'Material Design Guide',
    coverImg: '',
    viewCount: 5462,
  },
];

export const mainDocument: MainPost = {
  author: 'UI & UX Guide 2021',
  coverImg: '',
  title: 'By Shaheeb William',
};

export const activities: Activity[] = [
  {
    id: 1,
    author: 'John Stainlor',
    actionCode: ActionCode.COMMENTED,
    detail: 'John Stainlor liked your image',
    timestamp: '14 Minutes'
  },
  {
    id: 2,
    author: 'John Stainlor',
    actionCode: ActionCode.SHARED_A_VIDEO,
    detail: 'Creative people doing creative things',
    timestamp: '22 Minutes'
  },
  {
    id: 3,
    author: 'John Stainlor',
    actionCode: ActionCode.SHARED_A_DOCUMENT,
    detail: '\'How to become an expert?\'',
    timestamp: '25 Minutes'
  },
  {
    id: 4,
    author: 'Arjun',
    actionCode: ActionCode.UNLOCKED_A_BADGE,
    detail: 'Social Guru',
    timestamp: '34 Minutes'
  },
  {
    id: 5,
    author: 'Michael Townlee',
    actionCode: ActionCode.SHARED_A_VIDEO,
    detail: 'How to deal with design?',
    timestamp: '44 Minutes'
  },
  {
    id: 6,
    author: 'Michael Townlee',
    actionCode: ActionCode.LIKED_A_VIDEO,
    detail: 'Design Tricks',
    timestamp: '55 Minutes'
  },
  {
    id: 7,
    author: 'Arjun',
    actionCode: ActionCode.SHARED_A_DOCUMENT,
    detail: 'Eternal Journey',
    timestamp: '1 hour 2 minutes'
  },
]

export const channels: Channel[] = [
  {
    name: 'Google',
    img: ''
  },
  {
    name: 'Dribble',
    img: ''
  },
  {
    name: 'Amazon',
    img: ''
  },
  {
    name: 'Adidas',
    img: ''
  },
  {
    name: 'Microsoft',
    img: ''
  },
  {
    name: 'Yahoo',
    img: ''
  },
  {
    name: 'Levis',
    img: ''
  },
  {
    name: 'Venmo',
    img: ''
  },
  {
    name: 'Denim',
    img: ''
  },
  {
    name: 'Nevada',
    img: ''
  }
]
