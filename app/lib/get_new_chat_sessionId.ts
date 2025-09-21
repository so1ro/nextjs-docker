"use server";

import { getTimeStamp } from "./get_timestamp";

export async function getModelIds() {
  const timestamp_in_get_model_ids = await getTimeStamp();
  console.log(
    "timestamp_in_get_model_ids: ",
    timestamp_in_get_model_ids.unixtime
  );
}
