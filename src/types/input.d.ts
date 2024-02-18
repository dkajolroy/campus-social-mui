interface SignInput {
  email: string;
  password: string;
}

interface SignUpInput extends SignInput {
  firstName: string;
  lastName: string;
}
