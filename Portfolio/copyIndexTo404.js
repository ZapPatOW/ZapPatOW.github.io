import { copyFile } from "fs/promises";

async function copyIndexTo404() {
  try {
    await copyFile("./dist/index.html", "./dist/404.html");
    console.log("Copied index.html to 404.html");
  } catch (error) {
    console.error("Error copying file:", error);
    process.exit(1);
  }
}

copyIndexTo404();