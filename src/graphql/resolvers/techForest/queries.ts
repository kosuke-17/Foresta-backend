import {
  TechArea,
  TechBranch,
  TechLeaf,
  TechTree,
} from "../../../models/TechForest.model";

const techForestQueries = {
  /**
   * それぞれtech一覧情報を取得する.
   *
   * @returns techLeaf一覧情報
   * @returns techBranch一覧情報
   * @returns techTree一覧情報
   * @returns techArea一覧情報
   */
  getAllTechLeaf: async () => await TechLeaf.find({}),
  getAllTechBranch: async () => await TechBranch.find({}),
  getAllTechTree: async () => await TechTree.find({}),
  getAllTechArea: async () => await TechArea.find({}),
};

export default techForestQueries;
