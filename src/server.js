import Fastify from "fastify";
import { getHealth } from "./handlers/health.js";
import { listSignals, getSignalDetail } from "./handlers/signals.js";

const app = Fastify({ logger: true });

app.get("/health", getHealth);
app.get("/v1/signals", listSignals);
app.get("/v1/signals/:signalId", getSignalDetail);

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
await app.listen({ port: PORT, host: "0.0.0.0" });

