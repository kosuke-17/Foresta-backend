import { TechBranch, TechLeaf } from "../../../models/TechForest.model";
import { success } from "../responseStatus";
import { TechLeafType } from "../types";
import { TechBranchType } from "../types/techForest";

const techForestMutations = {
  /**
   * techLeaf追加する.
   *
   * @param techLeaf - techLeaf名
   * @returns success : successステータス,作成したtechLeaf
   * @returns error : errorステータス
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
  /**
   * techBranch追加する.
   *
   * @param techBranch - techBranch名
   * @returns success : successステータス,作成したtechBranch
   * @returns error : errorステータス
   */
  createTechBranch: async (
    _parent: any,
    { techBranch }: { techBranch: TechBranchType }
  ) => {
    const { name } = techBranch;

    try {
      const createTechLeaf = new TechBranch({ name });
      const result = await createTechLeaf.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default techForestMutations;
