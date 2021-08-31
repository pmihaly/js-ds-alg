// https://www.youtube.com/watch?v=cWNEl4HE2OE

// undirected graph (csomópontok minkét irányban össze vannak kötve)
// súlyozatlan (edgekhez nincs extra érték rendelve)
// két csomópontot csak egy edge kötheti össze, több nem

// Itt láthatóak néhány repőtértnek a nevei, és a légi folyosók
// 1. Ábrázold a légi folyosókat egy mátrixban, vagy
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
 * Egy repülőtér inicializálása, egy repülőtér egy kulcs
 * Értékük más repülőterek neveinek listája (lehet üres is)
 * @param  {String} airport
 * @returns {null}
 */
function addNode(airport) {
  adjacencyList.set(airport, []);
}

/**
 * Két repülőtér kapcsolata
 * Mindegy hogy melyikről repülünk hova, a lényeg, hogy közük van egymáshoz,
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

// 2. Van-e légi járat Phoenix (PHX) és Bangkok (BKK) között?

// Két megoldás létezik:
// Alapos elemzés: BFS
// Gyors találat: DFS
// Mindkét algoritmus O(v+e), ahol "v" a csomópontok száma és "e" a kapcsolatok száma
//      - tehát lineáris algoritmus, O(n)

// BFS - Breath first search - kövessük le először az első "szintet", majd a következőt
// Minden utat megvizsgálunk az adott ponthoz, így az optimális vagy alternatív útvonala(ka)t is tudunk vele találni
// interjún érdemes elmagyarázni a bfs lényegét

let steps = 0;

function bfs(start) {
  const queue = [start]; // queue csak egy lista, de első item be (.push()), első item out (.shift())
  const visited = new Set(); // kerüljük el a végtelen ciklust, jegyezzük fel, kinél voltunk már

  // ha queue.length több, mint egy, addíg
  while (queue.length) {
    const airport = queue.shift(); // szedjük le a megadott repteret, tároljuk el egy konstansba
    const destinations = adjacencyList.get(airport); // tároljuk el a reptér légifolyosóit

    // for in: indexeket (lista) vagy kulcsokat (objektum) ad vissza
    // for of: elemeket vagy értékeket ad vissza
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
