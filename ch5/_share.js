export function edge(n1, n2, c) {
  return [n1, n2, c]
}

export function graph(...edges) {
  this.nodes = new Set()
  this.edges = edges
  this.adjTable = new Map()

  for (const [u, v, c] of edges)
    this.addEdge(u, v, c)
}

graph.prototype = {
  constructor: graph,
  hasNode(u) {
    return this.nodes.has(u)
  },
  addNode(u) {
    this.nodes.add(u)
  },
  adj(u) {
    return this.adjTable.get(u)
  },
  isAdj(u, v) {
    return this.hasNode(u) && this.hasNode(v) && this.adj(u).get(v) && this.adj(v).get(u)
  },
  cost(u, v) {
    if (!this.isAdj(u, v))
      return Number.MAX_VALUE
    return this.adj(u).get(v)
  },
  addEdge(u, v, c) {
    this.addNode(u)
    this.addNode(v)

    if (!this.adj(u))
      this.adjTable.set(u, new Map())
    if (!this.adj(v))
      this.adjTable.set(v, new Map())

    this.adj(v).set(u, c)
    this.adj(u).set(v, c)
  },
  updateCost(u, v, newc) {

  },
  updateEdge() {

  },
  // Bellman-Ford equation: Dx(y) = MINv{ c(x,v) + Dv(y) }
  distance(u, v) {
    if(this.isAdj(u, v))
      return this.cost(u, v)
    
  },
  connect(g) {

  }
}

function test() {

}
