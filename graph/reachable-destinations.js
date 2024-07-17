class Graph {
  constructor() {
    this.adjacencyList = new Map()
  }

  getAirports(arr) {
    const hashMap = new Map()

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]

      for (let j = 0; j < element.length; j++) {
        const currentAirport = element[j]
        hashMap.set(currentAirport, true)
      }
    }

    return [...hashMap.keys()]
  }

  addNode(arr) {
    arr.forEach((item) => this.adjacencyList.set(item, []))
  }

  addEdgeToNode(src, dst) {
    this.adjacencyList.get(src).push(dst)
  }

  dfs(start) {
    const visited = new Set()
    const adjacencyList = this.adjacencyList
    
    function dfsHelper(node) {
      if (visited.has(node)) return

      visited.add(node)

      const neighbors = adjacencyList.get(node)
      neighbors.forEach((neighbor) => dfsHelper(neighbor))
    }

    dfsHelper(start)

    return [...visited]
  }
}

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['PHX', 'HEL'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['HEL', 'BKK'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
]

const graph = new Graph()

const airports = graph.getAirports(routes)

graph.addNode(airports)
routes.forEach((route) => graph.addEdgeToNode(route[0], route[1]))

const reachableDestinations = graph.dfs('PHX')

console.log(reachableDestinations)
