import { User, UserTodo } from "../../../models/User.model";

const userQueries = {
  /**
   * ユーザー一覧情報を取得する.
   *
   * @returns ユーザー一覧情報
   */
  getAllUser: async (_parent: any, _args: any) => {
    return await User.find({});
  },
  user: async (_parent: any, { _id }: any) => {
    return await User.findById({ _id });
  },
  /**
   * ユーザーのTodo一覧情報を取得する
   *
   * @param userId - ユーザーID
   * @returns todo一覧情報
   */
  getAllTodoByUser: async (_parent: any, { userId }: any) => {
    return await UserTodo.find({ userId: userId });
  },
};

export default userQueries;
