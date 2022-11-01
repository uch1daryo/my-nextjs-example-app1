import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "rn3wn0xmbm",
  apiKey: process.env.API_KEY,
});
