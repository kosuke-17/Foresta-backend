import { TechLeaf } from "../../../models/TechForest.model";

const techForestQueries = {
  getAllTechLeaf: async (_parent: any, args: any) => {
    return TechLeaf.find({});
  },
};

export default techForestQueries;
