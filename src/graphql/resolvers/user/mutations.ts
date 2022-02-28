import { v4 as uuid } from "uuid";
import { User, UserTodo, UserUrls } from "../../../models/User.model";
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
   * ユーザーのurl情報を作成.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,作成したURL情報
   * @returns error : errorステータス
   */
  createUserUrls: async (_parent: any, { user }: any) => {
    const { urlName, url, userId } = user;

    try {
      const createUserUrls = new UserUrls({
        user_urls: [
          {
            urlName: urlName,
            url: url,
          },
        ],
        userId: userId,
      });

      const result = await createUserUrls.save();
      return success(result);
    } catch (error) {
      return { status: "error" };
    }
  },
  /**
   * ユーザーのurl情報を追加.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,追加したURL情報
   * @returns error : errorステータス
   */
  addUserUrls: async (_parent: any, { user }: any) => {
    const { urlName, url, userId } = user;
    const user_urls_obj = { uid: uuid(), urlName: urlName, url: url };
    try {
      const result = await UserUrls.findOneAndUpdate(
        { userId: userId },
        { $addToSet: { user_urls: user_urls_obj } }
      );
      return success(result);
    } catch (error) {
      return { status: "error" };
    }
  },
  /**
   * ユーザーのurl情報を削除.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,追加したURL情報
   * @returns error : errorステータス
   */
  // removeUserUrls: async (_parent: any, { user }: any) => {
  //   const { uId, userId, urlId } = user;
  //   console.log("uId : " + uId);
  //   // console.log("urlId : " + urlId);
  //   console.log("userId : " + userId);

  //   try {
  //     const result = await UserUrls.findOneAndUpdate(
  //       {
  //         userId: userId,
  //       },
  //       { $pull: { user_urls: { $elemMatch: { uid: uId } } } }
  //     );
  //     return success(result);
  //   } catch (error) {
  //     return { status: "error" };
  //   }
  // },

  /**
   * 習得技術追加.
   *
   * @param user - ユーザー情報
   * @returns success : successステータス,技術を習得したユーザー
   * @returns error : errorステータス
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
   * @returns error : errorステータス
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
  /**
   * todoの追加.
   *
   * @param todo - todo情報
   * @returns success : successステータス,追加したtodo情報
   * @returns error : errorステータス
   */
  addTodo: async (_parent: any, { todo }: any) => {
    const { title, description, startedAt, finishedAt, isStatus, userId } =
      todo;
    try {
      const newTodo = new UserTodo({
        title,
        description,
        startedAt,
        finishedAt,
        isStatus,
        userId,
      });

      const result = await newTodo.save();
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * todoの削除.
   *
   * @param todoId - todoId
   * @returns success : successステータス
   * @returns error : errorステータス
   */
  removeTodo: async (_parent: any, { todoId }: any) => {
    try {
      const result = await UserTodo.deleteOne({ _id: todoId });
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * todoの編集.
   *
   * @param todo - todo情報
   * @returns success : successステータス,更新したtodo情報
   * @returns error : errorステータス
   */
  updateTodo: async (_parent: any, { todo }: any) => {
    const { id, title, description, startedAt, finishedAt, isStatus } = todo;
    try {
      const result = await UserTodo.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            title: title,
            description: description,
            startedAt: startedAt,
            finishedAt: finishedAt,
            isStatus: isStatus,
          },
        }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * todoの状態をtrueにする
   *
   * @param todoId - todoID
   * @returns success : successステータス,更新したtodo情報
   * @returns error : errorステータス
   */
  chekedTodoStatus: async (_parent: any, { todoId }: any) => {
    try {
      const result = await UserTodo.findByIdAndUpdate(
        { _id: todoId },
        { $set: { isStatus: true } }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
  /**
   * todoの状態をfalseにする
   *
   * @param todoId - todoID
   * @returns success : successステータス,更新したtodo情報
   * @returns error : errorステータス
   */
  unChekedTodoStatus: async (_parent: any, { todoId }: any) => {
    try {
      const result = await UserTodo.findByIdAndUpdate(
        { _id: todoId },
        { $set: { isStatus: false } }
      );
      return success(result);
    } catch (error) {
      // 必須のデータがnullだとエラーを返す
      return { status: "error" };
    }
  },
};

export default userMutations;
