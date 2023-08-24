import { patchFetch } from "next/dist/server/lib/patch-fetch";
import { UserData } from "../type/userType";
import {
  dataResponse,
  GetAPI,
  PostAPI,
  DeleteAPI,
  statusResponse,
  PatchAPI,
} from "./fetchAPI";

type LoginResponse = {
  pubKey: string;
  privKey: string;
} & statusResponse;

class UserAPI {
  static login(email: string, password: string) {
    return PostAPI<LoginResponse>("/user/login", {
      email,
      password,
    });
  }
  static getMyProfile() {
    return GetAPI<dataResponse<UserData>>("/user/");
  }

  static passwordConfirm(password: string) {
    return PostAPI<statusResponse>("/user/changeinfo/identification", {
      password,
    });
  }

  static updateUserNickname(nickname: string) {
    return PostAPI<statusResponse>("/user/changeinfo/nickname", {
      nickname,
    });
  }

  static updateUserPassWordModify(
    newPassword: string,
    newPasswordCheck: string
  ) {
    return PostAPI<statusResponse>("/user/changeinfo/password", {
      newPassword,
      newPasswordCheck,
    });
  }

  static DeleteCatagory(category: string, major: string) {
    return DeleteAPI<statusResponse>("/user/changeinfo/categorymajor", {
      category,
      major,
    });
  }

  static addCategory(email: string, category: string, major: String) {
    return PostAPI<statusResponse>("/user/changeinfo/categorymajor", {
      email,
      category,
      major,
    });
  }

  static UserDelete() {
    return DeleteAPI<statusResponse>("/user");
  }

  static UserProfilebody(body: string) {
    return PatchAPI<statusResponse>("/profile", {
      body,
    });
  }

  static UserProfileimg(file: string) {
    return PatchAPI<statusResponse>("/profile", {
      file,
    });
  }

  static GETUserProfile(targetUserId: number) {
    const queryParams = `?targetUserId=${targetUserId}`;
    return GetAPI<statusResponse>(`/profile?${targetUserId}`);
  }

  static Getnofication() {
    return GetAPI<statusResponse>(
      "/notifications/?page=1&recordSize=10&pageSize=10"
    );
  }

  static noficationid(id: number) {
    return PostAPI<statusResponse>("/notifications/updateread", {
      id,
    });
  }

  static getid(targetUserId: number) {
    return GetAPI<statusResponse>(
      `/profile/board?page=1&recordSize=3&${targetUserId}`
    );
  }

  static getchat() {
    return GetAPI<statusResponse>("/room");
  }

  static chatlist() {
    return GetAPI<statusResponse>("/room/18?cursor=0&limit=10");
  }

  static noneRead() {
    return GetAPI<statusResponse>("/dm/unread/count");
  }
}

export default UserAPI;
