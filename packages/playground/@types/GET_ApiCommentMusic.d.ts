declare interface ApiCommentMusicResponseType {
  isMusician: boolean;
  cnum: number;
  userId: number;
  topComments: any[];
  moreHot: boolean;
  hotComments: HotComment[];
  commentBanner?: any;
  code: number;
  comments: Comment[];
  total: number;
  more: boolean;
}
interface Comment {
  user: User3;
  beReplied: BeReplied2[];
  pendantData?: any;
  showFloorComment?: any;
  status: number;
  commentId: number;
  content: string;
  richContent?: any;
  contentResource?: any;
  time: number;
  timeStr: string;
  needDisplayTime: boolean;
  likedCount: number;
  expressionUrl?: any;
  commentLocationType: number;
  parentCommentId: number;
  decoration: Decoration;
  repliedMark?: any;
  grade?: any;
  userBizLevels?: any;
  liked: boolean;
}
interface Decoration {
}
interface BeReplied2 {
  user: User4;
  beRepliedCommentId: number;
  content: string;
  richContent?: any;
  status: number;
  expressionUrl?: any;
}
interface User4 {
  locationInfo?: any;
  liveInfo?: any;
  anonym: number;
  commonIdentity?: any;
  userId: number;
  userType: number;
  avatarDetail?: any;
  avatarUrl: string;
  experts?: any;
  vipType: number;
  followed: boolean;
  mutual: boolean;
  remarkName?: any;
  vipRights?: any;
  nickname: string;
  authStatus: number;
  expertTags?: any;
}
interface User3 {
  locationInfo?: any;
  liveInfo?: any;
  anonym: number;
  commonIdentity?: any;
  userId: number;
  userType: number;
  avatarDetail?: any;
  avatarUrl: string;
  experts?: any;
  vipType: number;
  followed: boolean;
  mutual: boolean;
  remarkName?: any;
  vipRights: VipRights;
  nickname: string;
  authStatus: number;
  expertTags?: any;
}
interface VipRights {
  associator: Associator;
  musicPackage: Associator;
  redplus?: any;
  redVipAnnualCount: number;
  redVipLevel: number;
}
interface HotComment {
  user: User;
  beReplied: BeReplied[];
  pendantData?: PendantDatum;
  showFloorComment?: any;
  status: number;
  commentId: number;
  content: string;
  richContent?: any;
  contentResource?: any;
  time: number;
  timeStr: string;
  needDisplayTime: boolean;
  likedCount: number;
  expressionUrl?: any;
  commentLocationType: number;
  parentCommentId: number;
  decoration?: any;
  repliedMark?: any;
  grade?: any;
  userBizLevels?: any;
  liked: boolean;
}
interface PendantDatum {
  id: number;
  imageUrl: string;
}
interface BeReplied {
  user: User2;
  beRepliedCommentId: number;
  content: string;
  richContent?: any;
  status: number;
  expressionUrl?: any;
}
interface User2 {
  locationInfo?: any;
  liveInfo?: any;
  anonym: number;
  commonIdentity?: any;
  userId: number;
  userType: number;
  avatarDetail: AvatarDetail;
  avatarUrl: string;
  experts?: any;
  vipType: number;
  followed: boolean;
  mutual: boolean;
  remarkName?: any;
  vipRights?: any;
  nickname: string;
  authStatus: number;
  expertTags?: any;
}
interface User {
  locationInfo?: any;
  liveInfo?: any;
  anonym: number;
  commonIdentity?: any;
  userId: number;
  userType: number;
  avatarDetail?: AvatarDetail;
  avatarUrl: string;
  experts?: any;
  vipType: number;
  followed: boolean;
  mutual: boolean;
  remarkName?: any;
  vipRights?: VipRight;
  nickname: string;
  authStatus: number;
  expertTags?: any;
}
interface VipRight {
  associator?: Associator;
  musicPackage?: Associator;
  redplus?: any;
  redVipAnnualCount: number;
  redVipLevel: number;
}
interface Associator {
  vipCode: number;
  rights: boolean;
  iconUrl: string;
}
interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}