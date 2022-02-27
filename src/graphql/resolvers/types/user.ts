export type UserType = {
  name: String;
  jobType: String;
  email: String;
  password: String;
  githubURL?: String;
  have_techLeafs?: String[];
};

export type UserTechLeafsType = {
  _id: String;
  techLeafId: string;
};

export type UserLoginType = {
  _id: String;
  email: String;
  password: String;
};
