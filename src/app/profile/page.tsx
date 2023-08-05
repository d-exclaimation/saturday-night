import { page } from "@d-exclaimation/next";
import { redirect } from "next/navigation";
export default page(() => {
  throw redirect("/profile/familiar");
});

export const runtime = "edge";
