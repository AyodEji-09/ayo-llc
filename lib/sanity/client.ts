import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "2c1c87ol",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});