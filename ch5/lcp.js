import { graph, edge } from "./_share"

function dijkstra(g, from) {
  const u = [from]
  const d = new Map()
  const p = new Map()
  let nextValue = Number.MAX_VALUE
  let nextNode = null
  let prevNode = from

  // init
  for (const [n1, n2, c] of g.edges) {
    if (n1 === from) {
      d.set(n2, c)
      if (c < nextValue) {
        nextValue = c
        nextNode = n2
      }
    }
    else if (n2 === from) {
      d.set(n1, c)
      if (c < nextValue) {
        nextValue = c
        nextNode = n1
      }
    }
  }

  // update
  while (u.length < g.nodes.size()) {
    u.push(nextNode)

    for (g.adj()) {

    }
  }
}

function main() {
  const u = Symbol()
  const v = Symbol()
  const w = Symbol()
  const x = Symbol()
  const y = Symbol()
  const z = Symbol()

  const g1 = graph(
    edge(u, v, 2),
    edge(u, w, 5),
    edge(u, x, 1),
    edge(v, w, 3),
    edge(v, x, 2),
    edge(w, x, 3),
    edge(w, y, 1),
    edge(w, z, 5),
    edge(x, y, 1),
    edge(y, z, 2),
  )

  dijkstra(g1, u)
  console.log(g1.distance(u, z))
}





