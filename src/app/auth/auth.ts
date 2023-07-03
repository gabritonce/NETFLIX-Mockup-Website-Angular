export interface Auth {
  accessToken: string;
  user: {
      id: number;
      name: string;
      email: string;
  };
}
