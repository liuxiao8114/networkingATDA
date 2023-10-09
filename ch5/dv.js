import { graph, edge } from "./_share"
const x = Symbol()
const y = Symbol()
const z = Symbol()

const exy = edge(x, y, 2)
const exz = edge(x, z, 7)
const eyz = edge(y, z, 1)

const rx = graph(exy, exz)
const ry = graph(exy, eyz)
const rz = graph(exz, eyz)
/**
 * 
 * 
 */
