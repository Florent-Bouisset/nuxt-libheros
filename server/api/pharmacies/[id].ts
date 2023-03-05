import { Pharmacy } from "@/types";
import { getDatabaseInstance } from "../../DatabaseClient";

export default defineEventHandler(async (event) => {
  const db = await getDatabaseInstance();
  const id = event.context?.params?.id;
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "There should be an ID",
    });
  }
  return await db
    .collection("collection")
    .findOne<Pharmacy>({ _id: id as any });
});
