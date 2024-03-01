interface User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  email: string;
  verifiedEmail: boolean;
  verifiedPhone: boolean;
  relationShip: "Single" | "Married" | "In a Relationship";
  createdAt: string;
  updatedAt: string;
  social: {
    facebook?: string;
    github?: string;
    web?: string;
    youtube?: string;
    contactMail?: string;
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
  author: string;
  type: "PROFILE" | "COVER" | "NORMAL";
  text: string;
  tags: string[];
  reacts: IReact[];
  comments: Comment[];
  privacy: "ONLY_ME" | "FRIENDS" | "PUBLIC";
  images: [
    {
      public_id: string;
      secure_url: string;
      _id: string;
    }
  ];
  videos: [
    {
      public_id: string;
      secure_url: string;
      _id: string;
    }
  ];
  _id: string;
  createdAt: string;
  updatedAt: string;
}
