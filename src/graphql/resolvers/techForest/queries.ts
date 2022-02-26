import { TechBranch, TechLeaf } from "../../../models/TechForest.model";

const techForestQueries = {
  /**
   * techLeaf一覧情報を取得する.
   *
   * @returns techLeaf一覧情報
   */
  getAllTechLeaf: async (_parent: any, _args: any) => {
    return TechLeaf.find({});
  },
  /**
   * techBranch一覧情報を取得する.
   *
   * @returns techBranch一覧情報
   */
  getAllTechBranch: async (_parent: any, _args: any) => {
    return TechBranch.find({});
  },
};

export default techForestQueries;
