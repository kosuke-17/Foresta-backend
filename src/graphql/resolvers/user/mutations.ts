import { User } from "../../../models/User.model";
import { success } from "../responseStatus";
import { UserType, UserTechLeafsType, UserLoginType } from "../types";

const userMutations = {
  /**
   * ユーザー追加.
   *
   * @param user - 名、職種、email、パスワード、GithubURL
   * @returns success : successステータス,作成したユーザー
   * @returns error : errorステータス
   */
  createUser: async (_parent: any, { user }: { user: UserType }) => {
    // user_paramを分割代入
    let { name, jobType, email, password, githubURL } = user;
    if (githubURL == null) {
      githubURL = "";
    }
    try {
      const createUser = new User({
        name,
        jobType,
        email,
        password,
        githubURL,
      });
      const result = await createUser.save();
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * ログインする処理.
   *
   * @param user - ユーザーID, email, パスワード
   * @returns success : successステータス,当てはまったユーザー
   * @returns error : errorステータス
   */
  userLogin: async (_parent: any, { user }: { user: UserLoginType }) => {
    const { _id, email, password } = user;
    try {
      const result = await User.findOne({
        _id: _id,
        email: email,
        password: password,
      });

      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },

  /**
   * 習得技術追加.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,技術を習得したユーザー
   */
  addUserTechLeafs: async (
    _parent: any,
    { user }: { user: UserTechLeafsType }
  ) => {
    const { _id, techLeafId } = user;
    try {
      const result = await User.findByIdAndUpdate(
        { _id: _id },
        {
          $addToSet: { have_techLeafs: techLeafId },
        }
      );
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * 習得技術削除.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,習得技術を削除したユーザー
   */
  removeUserTechLeafs: async (
    _parent: any,
    { user }: { user: UserTechLeafsType }
  ) => {
    const { _id, techLeafId } = user;
    try {
      const result = await User.findByIdAndUpdate(
        { _id: _id },
        {
          $pull: { have_techLeafs: techLeafId },
        }
      );
      return success(result);
    } catch (e) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default userMutations;
