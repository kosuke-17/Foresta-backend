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
    // console.log("更新");
    const result = User.updateMany(
      { _id: _id },
      {
        $push: { userInfo_techLeafs: "6218cb1b5a704eaaf78a18e9" },
      }
    );
    const UserById = User.findById({ _id });

    return UserById;
  },
};

export default userMutations;
