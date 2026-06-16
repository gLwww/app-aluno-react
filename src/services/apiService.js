const BASE = 'https://jsonplaceholder.typicode.com'

export async function buscarTopicosTutor() {
  const res = await fetch(`${BASE}/posts?_limit=4`)
  if (!res.ok) {
    throw new Error(`Erro ${res.status} ao falar com o tutor`)
  }
  return res.json()
}
