import { TechLeaf } from "../../../models/TechForest.model";

const techForestQueries = {
  /**
   * techLeaf一覧情報を取得する.
   *
   * @returns techLeaf一覧情報
   */
  getAllTechLeaf: async (_parent: any, _args: any) => {
    return TechLeaf.find({});
  },
};

export default techForestQueries;
