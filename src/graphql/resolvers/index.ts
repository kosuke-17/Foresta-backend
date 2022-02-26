import { TechBranch, TechLeaf, TechTree } from "../../models/TechForest.model";
import { techForestMutations, techForestQueries } from "./techForest";
import { userMutations, userQueries } from "./user";

const resolvers = {
  Query: {
    ...userQueries,
    ...techForestQueries,
  },
  Mutation: {
    ...userMutations,
    ...techForestMutations,
  },
  TechBranch: {
    techLeafs: async ({ _id }: any) => await TechLeaf.find({}),
  },
  TechTree: {
    techBranches: async ({ _id }: any) => await TechBranch.find({}),
  },
  TechArea: {
    techTrees: async ({ _id }: any) => await TechTree.find({}),
  },
};

export default resolvers;
