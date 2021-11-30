import { post, get } from "../../../api/HttpClient";

export async function musteriEkle(musteriData) {
  const url = "/api/musteri";
  return post(url, musteriData);
}

export async function musteriList() {
  const url = "/api/musteri";
  return get(url);
}