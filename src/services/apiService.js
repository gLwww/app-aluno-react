const BASE = 'https://jsonplaceholder.typicode.com'

export async function buscarRespostaTutor() {
  const id = Math.floor(Math.random() * 100) + 1
  const res = await fetch(`${BASE}/posts/${id}`)
  if (!res.ok) {
    throw new Error(`Erro ${res.status} ao falar com o tutor`)
  }
  const post = await res.json()

  const frases = post.body.replace(/\n/g, ' ').split('. ')
  return frases.slice(0, 2).join('. ').trim() + '.'
}
