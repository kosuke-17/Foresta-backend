import { User } from "../../../models/User.model";

const userQueries = {
  /**
   * ユーザー一覧情報を取得する.
   *
   * @returns - ユーザー一覧情報
   */
  getAllUser: async (_parent: any, _args: any) => {
    return User.find({});
  },
  user: async (_parent: any, { id }: any) => {
    const objId = id;

    return User.findById({ objId });
  },
};

export default userQueries;
