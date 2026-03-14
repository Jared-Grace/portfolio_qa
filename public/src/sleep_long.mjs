import { sleep } from "../../../love/public/src/sleep.mjs";
export async function sleep_long(ms) {
  let r = await sleep(ms);
  return r;
}
