import { signals } from "../data/signals.js";

export async function listSignals() {
  return {
    data: signals,
    page: { nextCursor: null },
  };
}

export async function getSignalDetail(request, reply) {
  const { signalId } = request.params;

  const signal = signals.find((s) => s.id === signalId);

  if (!signal) {
  return reply
    .code(404)
    .type("application/problem+json")
    .send({
      type: "https://errors.citysignals.dev/not-found",
      title: "Not Found",
      status: 404,
      detail: `Signal '${signalId}' was not found.`,
      instance: `/v1/signals/${signalId}`,
    });
}


  const signalDetail = {
  ...signal,
  description:
    signal.type === "parking"
      ? "Synthetic model estimate of curbside parking availability based on recent patterns and city context."
      : "Synthetic model estimate of traffic congestion based on recent patterns across main corridors.",
  history: [
    { at: "2026-01-10T09:45:00Z", score: Math.max(0, signal.score - 8) },
    { at: "2026-01-10T10:00:00Z", score: Math.max(0, signal.score - 4) },
    { at: signal.updatedAt, score: signal.score },
  ],
  links: {
    self: `/v1/signals/${signal.id}`,
    list: "/v1/signals",
  },
};

return signalDetail;

}