import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const studioDir = path.join(rootDir, "studio");

function sync() {
  let envContent = "";
  let envFileFound = "";

  for (const file of [".env.local", ".env"]) {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
      envContent = fs.readFileSync(filePath, "utf-8");
      envFileFound = file;
      break;
    }
  }

  if (!envContent) {
    console.log("⚠️ No root .env or .env.local file found. Skipping studio env sync.");
    return;
  }

  console.log(`⚡ Syncing environment variables from root ${envFileFound} to studio/.env...`);

  const vars = {};
  envContent.split(/\r?\n/).forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let val = match[2] || "";
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      } else if (val.startsWith("'") && val.endsWith("'")) {
        val = val.slice(1, -1);
      }
      vars[key] = val.trim();
    }
  });

  const projectId = vars["SANITY_STUDIO_PROJECT_ID"] || vars["NEXT_PUBLIC_SANITY_PROJECT_ID"];
  const dataset = vars["SANITY_STUDIO_DATASET"] || vars["NEXT_PUBLIC_SANITY_DATASET"] || "production";
  const appId = vars["SANITY_STUDIO_APP_ID"] || "";

  if (!projectId) {
    console.log("⚠️ NEXT_PUBLIC_SANITY_PROJECT_ID is not defined in root env. Skipping studio/.env update.");
    return;
  }

  const studioEnvContent = `# Generated automatically by scripts/sync-env.js
SANITY_STUDIO_PROJECT_ID=${projectId}
SANITY_STUDIO_DATASET=${dataset}
SANITY_STUDIO_TITLE="Chemcider Content Studio"
SANITY_STUDIO_APP_ID=${appId}
`;

  fs.writeFileSync(path.join(studioDir, ".env"), studioEnvContent, "utf-8");
  console.log("✅ Successfully generated studio/.env");
}

sync();
