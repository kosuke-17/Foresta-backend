import { UserType } from "./types";
// レスポンスで返すステータス
export enum QueryStatus {
  success = "success",
  // notFound = "NOT_FOUND",
  // error = "ERROR",
}
/**
 *
 * @param node - リターンするデータ
 * @returns - successの文字列
 * @returns - nodeData
 */
type nodeType = UserType
export const success = (node: nodeType) => ({
  status: QueryStatus.success,
  node,
});
// export const notFound = (message: string) => ({
//   status: QueryStatus.notFound,
//   message,
// });
// export const error = (message: string) => ({
//   status: QueryStatus.error,
//   message,
// });
