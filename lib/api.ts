const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getHomeData(lang: string) {
  const res = await fetch(`${API_URL}/textos/${lang}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getData(url: string, lang: string) {
  const res = await fetch(`${API_URL}/${url}/${lang}`, {
    cache: "no-store",
  });
  return res.json();
}
