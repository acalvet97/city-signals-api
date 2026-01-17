export async function getHealth() {
  return {
    status: "ok",
    service: "city-signals-api",
    version: "1.0.0",
  };
}
