// https://www.youtube.com/watch?v=cWNEl4HE2OE

// undirected graph (csomópontok minkét irányban össze vannak kötve)
// súlyozatlan (edgekhez nincs extra érték rendelve)
// két csomópontot csak egy edge kötheti össze, több nem

// Itt láthatóak néhány repőtértnek a nevei, és a légi folyosók
// Ábrázold a légi folyosókat egy mátrixban, vagy
// szomszédossági táblában (adjacency list)
//
// (mivel kevés a légi járat a lehetséges repülőtér-kombinációkhoz képest,
// a mátrixunk gyér lenne, ezért több értelme van ilyenkor egy szomszédossági listának)
const airports = "PHX BKK JFK LAX MEX EZE HEL LOS LAP LIM OKC".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Algo kérdéseknél new Map() hasznosabb, mint egy klasszikus objektum,
// mert bővebb az APIja, és jobban hasonlít egy hashmapre (py: dict)

const adjacencyList = new Map();

/**
 * Egy repülőteér inicializálása, egy repülőtér egy (talán üres) kulcs.
 * @param  {String} airport
 */
function addNode(airport) {
  adjacencyList.set(airport, []);
}

/**
 * Két repülőtér összekötése
 * Mindegy hogy melyikről repülünk hova, a lényeg, hogy közük van egymáshoz,
 * építsük akkor itt ki a kapcsulatukat
 * @param  {String} origin
 * @param  {String} destination
 */
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);

routes.forEach((route) => addEdge(...route));

console.table(adjacencyList);

// Van-e légi járat Phoenix (PHX) és Bangkok (BKK) között?

// BFS - Breath first search
// itt hagytam abba: https://youtu.be/cWNEl4HE2OE?t=355

// DFS
