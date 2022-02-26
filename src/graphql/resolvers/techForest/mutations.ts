import {
  TechArea,
  TechBranch,
  TechLeaf,
  TechTree,
} from "../../../models/TechForest.model";
import { success } from "../responseStatus";
import { TechLeafType } from "../types";
import {
  TechAreaType,
  TechBranchType,
  TechTreeType,
} from "../types/techForest";

const techForestMutations = {
  /**
   * TechLeaf追加する.
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
   * TechBranch追加する.
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
      const createTechBranch = new TechBranch({ name });
      const result = await createTechBranch.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * TechTree追加する.
   *
   * @param techTree - techTree名
   * @returns success : successステータス,作成したtechTree
   * @returns error : errorステータス
   */
  createTechTree: async (
    _parent: any,
    { techTree }: { techTree: TechTreeType }
  ) => {
    const { name } = techTree;

    try {
      const createTechTree = new TechTree({ name });
      const result = await createTechTree.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * TechArea追加する.
   *
   * @param techArea - techArea名
   * @returns success : successステータス,作成したtechArea
   * @returns error : errorステータス
   */
  createTechArea: async (
    _parent: any,
    { techArea }: { techArea: TechAreaType }
  ) => {
    const { name } = techArea;

    try {
      const createTechArea = new TechArea({ name });
      const result = await createTechArea.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default techForestMutations;
