// Dot-matrix map of Nepal. Simplified outline (lon, lat) projected to an SVG grid at build time.
const outline: [number, number][] = [
  [80.06, 28.84], [80.3, 29.25], [80.55, 29.65], [80.9, 30], [81.15, 30.2], [81.55, 30.42], [82.1, 30.34], [82.55, 30.05],
  [83, 29.65], [83.55, 29.25], [84.15, 29.25], [84.45, 28.85], [85, 28.62], [85.4, 28.38], [85.85, 28.28], [86.3, 28.05],
  [86.9, 27.98], [87.5, 27.88], [88.1, 27.88], [88.18, 27.45], [88.1, 26.95], [88.02, 26.45], [87.5, 26.38], [86.9, 26.48],
  [86.25, 26.62], [85.65, 26.82], [85.15, 26.86], [84.65, 27.25], [84.1, 27.48], [83.55, 27.42], [83.2, 27.42], [82.75, 27.5],
  [82.3, 27.7], [81.85, 27.88], [81.3, 28.15], [80.85, 28.48], [80.45, 28.62], [80.06, 28.84],
];
const cities = [
  { name: "Kathmandu", ne: "काठमाडौं", lon: 85.32, lat: 27.7, label: true },
  { name: "Pokhara", ne: "पोखरा", lon: 83.98, lat: 28.21, label: true },
  { name: "Biratnagar", ne: "विराटनगर", lon: 87.27, lat: 26.48, label: true, anchor: "end" as const },
  { name: "Mahendranagar", ne: "महेन्द्रनगर", lon: 80.2, lat: 28.96, label: true, anchor: "start" as const },
  { name: "Nepalgunj", ne: "नेपालगन्ज", lon: 81.62, lat: 28.06, label: false },
  { name: "Butwal", ne: "बुटवल", lon: 83.45, lat: 27.7, label: false },
  { name: "Janakpur", ne: "जनकपुर", lon: 85.92, lat: 26.73, label: false },
  { name: "Surkhet", ne: "सुर्खेत", lon: 81.63, lat: 28.6, label: false },
];

const SX = 88, SY = 100, LON0 = 79.9, LAT0 = 30.6;
const proj = (lon: number, lat: number): [number, number] => [(lon - LON0) * SX, (LAT0 - lat) * SY];
const W = (88.35 - LON0) * SX, H = (LAT0 - 26.25) * SY;
const poly = outline.map(([a, b]) => proj(a, b));

function inside(x: number, y: number) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

const STEP = 11;
const dots: [number, number][] = [];
for (let y = STEP / 2; y < H; y += STEP) for (let x = STEP / 2; x < W; x += STEP) if (inside(x, y)) dots.push([x, y]);

export default function NepalMap({ label, lang }: { label: string; lang: "en" | "ne" }) {
  return (
    <svg viewBox={`-20 -20 ${W + 40} ${H + 40}`} role="img" aria-label={label} className="h-auto w-full">
      <g className="fill-ink/15">
        {dots.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={2.4} />
        ))}
      </g>
      {cities.map((c, i) => {
        const [x, y] = proj(c.lon, c.lat);
        return (
          <g key={c.name}>
            <circle cx={x} cy={y} r={16} className="map-ping fill-brand/25" style={{ animationDelay: `${i * 0.4}s` }} />
            <circle cx={x} cy={y} r={5} className="fill-brand" />
            {c.label && (
              <text x={c.anchor === "start" ? x - 8 : c.anchor === "end" ? x + 8 : x} y={y - 14} textAnchor={c.anchor ?? "middle"} className="fill-ink text-[17px] font-medium">
                {lang === "ne" ? c.ne : c.name}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
