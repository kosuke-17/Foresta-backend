import { TechLeaf } from "../../models/TechForest.model";
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
    // TypeDefsのTechBranch(親リゾルバ)から受け取ったidを用いて
    techLeafs: async ({ _id }: any) => {
      const techLeaf = await TechLeaf.find({});
      // からの配列が種出てきてしまう
      // const techLeaf = await TechLeaf.find({
      //   techBranch_id: _id,
      // });
      return techLeaf;
    },
  },
};

export default resolvers;
