import { TechLeaf } from "../../../models/TechForest.model";
import { success } from "../responseStatus";

const techForestMutations = {
  /**
   * ユーザー追加.
   *
   * @param _parent - 親リゾルバから受け取るオブジェクト
   * @param args - 受け取ってきた引数
   * @returns - success : successステータス,作成したユーザー
   * @returns - error : errorステータス
   */
  createTechLeaf: async (
    _parent: any,
    { techLeaf }: { techLeaf: { name: string } }
  ) => {
    const { name } = techLeaf;

    try {
      const createTechLeaf = new TechLeaf({ name });
      const result = await createTechLeaf.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default techForestMutations;
