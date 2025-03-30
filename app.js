import FirecrawlApp from "@mendable/firecrawl-js";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

// Check for required environment variables
const {
  FIRECRAWL_API_KEY,
} = process.env;

const app = new FirecrawlApp({
  apiKey: FIRECRAWL_API_KEY, 
});
// Define schema to extract contents into
const schema = z.object({
  company_mission: z.string(),
  supports_sso: z.boolean(),
  is_open_source: z.boolean(),
  is_in_yc: z.boolean()
});

const scrapeResult = await app.scrapeUrl("https://docs.firecrawl.dev/", {
  formats: ["json"],
  jsonOptions: { schema: schema }
});

if (!scrapeResult.success) {
  throw new Error(`Failed to scrape: ${scrapeResult.error}`)
}

console.log(scrapeResult.extract);
