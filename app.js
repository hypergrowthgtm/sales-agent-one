import FirecrawlApp from "@mendable/firecrawl-js";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

// Check for required environment variables
const {
  FIRECRAWL_API_KEY,
} = process.env;

const app = new FirecrawlApp({
  apiKey: "FIRECRAWL_API_KEY"
});

// Define schema to extract contents into
const schema = z.object({
  name: z.string(),
  headline: z.string(),
  job_title: z.string(),
});

const scrapeResult = await app.scrapeUrl("https://linkedin.com/in/alexpuga8/", {
  formats: ["json"],
  jsonOptions: { schema: schema }
});

if (!scrapeResult.success) {
  throw new Error(`Failed to scrape: ${scrapeResult.error}`)
}

console.log(scrapeResult.extract);
