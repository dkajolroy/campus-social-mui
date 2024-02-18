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
