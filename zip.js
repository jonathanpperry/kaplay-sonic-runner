import { zip } from "zip-a-folder";

async function main() {
  await zip("./dist", "./dist.zip");
  console.log("dist folder zipped!");
}

main();
