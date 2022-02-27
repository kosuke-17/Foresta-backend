export type UserType = {
  id: String;
  name: String;
  jobType: String;
  githubURL?: String;
  have_techLeafs?: String[];
};

export type UserTechLeafsType = {
  _id: String;
  techLeafId: string;
};
