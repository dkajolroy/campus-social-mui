interface User {
  _id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName?: string;
  avatar: { secure_url: string; public_id: string };
  cover: { secure_url: string; public_id: string };
  username: string;
  email: string;
  phone?: string;
  password: string;
  verifiedEmail: boolean;
  verifiedPhone: boolean;
  onetimeKey: number;
  dateOfBirth?: string;
  bio: string;
  relationShip: "Single" | "Married" | "In a Relationship";
  city: string;
  country: string;
  friends: {
    date: Date;
    user: User;
  }[];
  request: {
    date: Date;
    user: User;
  }[];
  requestTo: {
    date: Date;
    user: User;
  }[];
  social: {
    facebook: string | null;
    github: string | null;
    web: string | null;
    youtube: string | null;
    contactMail: string | null;
  };
}

enum RType {
  "LIKE" = "LIKE",
  "LOVE" = "LOVE",
  "HAHA" = "HAHA",
  "ANGRY" = "ANGRY",
  "WOW" = "WOW",
  "SAD" = "SAD",
  "CARE" = "CARE",
}
interface IReact {
  author: User;
  type: RType;
  post: Post;
  date: Date;
}
interface IComment {
  author: Object;
  post: Object;
  text?: string;
  image?: UploadContent;
  sticker?: string;
  createdAt?: string;
}

interface IPost {
  author: User;
  type: "PROFILE" | "COVER" | "NORMAL";
  caption: string;
  tags: string[];
  reacts: IReact[];
  comments: Comment[];
  privacy: "ONLY_ME" | "FRIENDS" | "PUBLIC";
  media: [
    {
      public_id: string;
      secure_url: string;
      resource_type: "image" | "video";
      _id: string;
    }
  ];
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface Conversation {
  _id: string;
  admin: User[];
  isGroup: boolean;
  name: string;
  last_msg?: Message;
  members: User[];
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Message {
  _id;
  sender?: User;
  receiver?: Conversation;
  text: string;
  isRemoved: Boolean;
  react: {
    type: RType;
    reacted_by: User;
  }[];
  delivered: boolean;
  seen: boolean;
  media: {
    public_id: { type: String; required: true };
    secure_url: { type: String; required: true };
    resource_type: { type: String; enum: ["image", "video"] };
  }[];
  createdAt: string;
  updatedAt: string;
}
