import { cookies } from "next/headers";
import { verifyJwt } from "./jwt";

export async function getCurrentUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return null;
  }

  const { valid, payload } = await verifyJwt(token);

  if (!valid) {
    return null;
  }

  return payload; // Should contain user info like userId, email, role
}
