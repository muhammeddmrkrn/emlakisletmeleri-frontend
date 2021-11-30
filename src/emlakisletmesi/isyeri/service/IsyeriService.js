import { post, get } from "../../../api/HttpClient";

export async function isyeriEkle(isyeriData) {
  const url = "/api/isyeri";
  return post(url, isyeriData);
}

export async function isyeriList() {
  const url = "/api/isyeri";
  return get(url);
}