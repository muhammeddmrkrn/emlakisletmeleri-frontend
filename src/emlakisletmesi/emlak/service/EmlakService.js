import { post, get, ara } from "../../../api/HttpClient";

export async function emlakEkle(emlakData) {
  const url = "/api/emlak";
  return post(url, emlakData);
}

export async function emlakList() {
  const url = "/api/emlak";
  return get(url);
}

export async function emlakAra(emlakData) {
  const url = "/api/emlak/ara";
  return post(url, emlakData);
}