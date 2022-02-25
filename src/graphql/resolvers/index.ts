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
};

export default resolvers;
