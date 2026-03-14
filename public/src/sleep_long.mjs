import { sleep } from "../../../love/public/src/sleep.mjs";
export async function sleep_long() {
  let r = await sleep(99999);
  return r;
}
