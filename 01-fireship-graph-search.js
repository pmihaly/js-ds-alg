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
 * @returns {null}
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
 * @returns {null}
 *
 */
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);

routes.forEach((route) => addEdge(...route));

console.table(adjacencyList);

// Van-e légi járat Phoenix (PHX) és Bangkok (BKK) között?

// Két megoldás létezik:
// Gyors találat: DFS
// Alapos elemzés: BFS
// Mindkét algoritmus O(v+e), ahol "v" a csomópontok száma és "e" a kapcsolatok száma
//      - tehát lineáris algoritmus

// BFS - Breath first search - kövessük le először az első "szintet", majd a következőt
// Minden utat megvizsgálunk az adott ponthoz, így az optimális vagy alternatív útvonalat is tudunk vele keresni
// interjún érdemes elmagyarázni a bfs lényegét

let steps = 0;

function bfs(start) {
  const queue = [start]; // lista, csak első item be, első item out
  const visited = new Set(); // kerüljük el a végtelen ciklust, jegyezzük fel, kinél voltunk már

  // ha queue.length több, mint egy, addíg
  while (queue.length) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      console.log(destination);
      steps++;
      if (destination === "BKK") {
        console.log(`BFS found BKK in ${steps} steps`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}
bfs("PHX");

// DFS - Depth first search
// Kövessünk végig egy útvonalat, aztán a következőt, aztán a következőt, ...,
// amíg meg nem találtuk a célpontot
// (rekurzív függvény)
// Találjuk meg mihamarabb a célpontot

steps = 0;
function dfs(start, visited = new Set()) {
  console.log(start);
  visited.add(start);
  steps++;

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log(`DFS found Bangkok ${steps} in steps`);
      return;
    }
    if (!visited.has(destination)) dfs(destination, visited);
  }
}

dfs("PHX");
