import { MedicationAvailability, Pharmacy } from "@/types";
import { getDatabaseInstance } from "../../DatabaseClient";

export default defineEventHandler(async (event) => {
  const db = await getDatabaseInstance();
  const pharmacies = await db
    .collection("collection")
    .find<Pharmacy>({}, { limit: 50 })
    .toArray();

  let medList: MedicationAvailability[] = [];
  for (const pharmacy of pharmacies) {
    for (const med of pharmacy.stock) {
      if (!medList.find((item) => item.id === med.id)) {
        medList.push({
          id: med.id,
          name: med.name,
          availability: [] as any,
        });
      }
      const myMed = medList.find((el) => el.id === med.id);
      if (myMed) {
        myMed.availability.push({
          id: pharmacy._id,
          name: pharmacy.name,
          price: med.price,
          stock: med.stock,
        });
      }
    }
  }
  return medList;
});
