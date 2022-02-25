import { TechLeaf } from "../../../models/TechForest.model";
import { success } from "../responseStatus";
import { TechLeafType } from "../types/user";

const techForestMutations = {
  /**
   * techLeaf追加する.
   *
   * @param _parent - 親リゾルバから受け取るオブジェクト
   * @param args - 受け取ってきた引数
   * @returns - success : successステータス,作成したtechLeafユーザー
   * @returns - error : errorステータス
   */
  createTechLeaf: async (
    _parent: any,
    { techLeaf }: { techLeaf: TechLeafType }
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
