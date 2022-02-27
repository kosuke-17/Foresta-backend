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
    techLeafs: async ({ _id }: any) =>
      await TechLeaf.find({ techBranch_id: _id }),
  },
  TechTree: {
    techBranches: async ({ _id }: any) =>
      await TechBranch.find({ techTree_id: _id }),
  },
  TechArea: {
    techTrees: async ({ _id }: any) => {
      return await TechTree.find({ techArea_id: _id });
    },
  },
};

export default resolvers;
