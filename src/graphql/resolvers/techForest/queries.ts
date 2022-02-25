import { TechLeaf } from "../../../models/TechForest.model";

const techForestQueries = {
  /**
   * techLeaf一覧情報を取得する.
   *
   * @param _parent - 親リゾルバから受け取るオブジェクト
   * @param args - 受け取ってきた引数
   * @returns - techLeaf一覧情報
   */
  getAllTechLeaf: async (_parent: any, _args: any) => {
    return TechLeaf.find({});
  },
};

export default techForestQueries;
