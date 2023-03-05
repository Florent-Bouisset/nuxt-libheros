import { Pharmacy } from "@/types";
import { getDatabaseInstance } from "../../DatabaseClient";

export default defineEventHandler(async (event) => {
  const db = await getDatabaseInstance();
  return db
    .collection("collection")
    .find<Pharmacy>({}, { limit: 50 })
    .toArray();
});
