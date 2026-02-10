import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    service: "backend",
    status: "ok",
    message: "Hello from Hono",
  });
});

app.get("/health", (c) => {
  return c.json({ ok: true });
});

export default {
  port: 3002,
  fetch: app.fetch,
};