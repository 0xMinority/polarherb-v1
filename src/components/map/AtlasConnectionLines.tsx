import { HerbNode } from "../../data/herbs";

interface AtlasConnectionLinesProps {
  selectedHerb: HerbNode;
  herbs: HerbNode[];
}

export default function AtlasConnectionLines({
  selectedHerb,
  herbs,
}: AtlasConnectionLinesProps) {
  return (
    <svg className="pointer-events-none absolute inset-10 h-[calc(100%-80px)] w-[calc(100%-80px)] overflow-visible">
      {herbs
        .filter((herb) => herb.id !== selectedHerb.id)
        .map((herb) => {
          const x1 = selectedHerb.readiness;
          const y1 = 100 - (selectedHerb.altitude / 6000) * 100;

          const x2 = herb.readiness;
          const y2 = 100 - (herb.altitude / 6000) * 100;

          return (
            <line
              key={`${selectedHerb.id}-${herb.id}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(208,168,92,0.13)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          );
        })}
    </svg>
  );
}