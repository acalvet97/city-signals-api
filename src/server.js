import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => {
  return {
    status: "ok",
    service: "city-signals-api",
    version: "1.0.0",
  };
});

app.get("/v1/signals", async () => {
  return {
    data: [
      {
        id: "bcn.parking.availability",
        cityId: "bcn",
        type: "parking",
        status: "good",
        score: 72,
        confidence: 0.84,
        updatedAt: "2026-01-10T10:15:00Z",
        summary: "Parking availability is good near the city center.",
        sources: [
          {
            name: "Synthetic Dataset",
            kind: "derived",
            url: null,
          },
        ],
      },
      {
        id: "bcn.traffic.congestion",
        cityId: "bcn",
        type: "traffic",
        status: "moderate",
        score: 54,
        confidence: 0.76,
        updatedAt: "2026-01-10T10:12:00Z",
        summary: "Traffic congestion is moderate across main avenues.",
        sources: [
          {
            name: "Synthetic Dataset",
            kind: "derived",
            url: null,
          },
        ],
      },
    ],
    page: {
      nextCursor: null,
    },
  };
});



const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

await app.listen({ port: PORT, host: "0.0.0.0" });
