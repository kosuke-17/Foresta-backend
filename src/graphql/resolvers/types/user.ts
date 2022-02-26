export type UserType = {
  id: String;
  name: String;
  jobType: String;
  githubURL?: String;
  userInfo_techLeafs?: String[];
};

export type UserTechLeafsType = {
  _id: String;
  techLeafId: string;
};
