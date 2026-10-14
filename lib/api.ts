const API_URL = process.env.API_URL;

export async function getHomeData(lang: string) {
  const res = await fetch(`${API_URL}/textos/${lang}`, {
    next: {
      revalidate: 1296000, // 15 días en segundos (15 * 24 * 60 * 60)
    },
  });
  return res.json();
}

export async function getData(url: string, lang: string) {
  const res = await fetch(`${API_URL}/${url}/${lang}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getDataBySlug(url: string, slug: string, lang: string) {
  const res = await fetch(`${API_URL}/${url}/${slug}/${lang}`, {
    cache: "no-store",
  });
  return res.json();
}
