import { User } from "../../../models/User.model";
import { success } from "../responseStatus";
import { UserType } from "../types";
import { UserTechLeafsType } from "../types/user";

const userMutations = {
  /**
   * ユーザー追加.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,作成したユーザー
   * @returns error : errorステータス
   */
  createUser: async (_parent: any, { user }: { user: UserType }) => {
    // user_paramを分割代入
    let { name, jobType, githubURL } = user;
    if (githubURL == null) {
      githubURL = "";
    }
    try {
      const createUser = new User({ name, jobType, githubURL });
      const result = await createUser.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  updateUserTechLeafs: async (
    _parent: any,
    { user }: { user: UserTechLeafsType }
  ) => {
    const { _id, techLeafId } = user;

    // 追加更新したい
    const result = User.findByIdAndUpdate(
      { _id: _id },
      {
        $addToSet: { userInfo_techLeafs: techLeafId },
      }
    );

    return result;
  },
};

export default userMutations;
