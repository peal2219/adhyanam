import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function signJwt(payload, options = {}) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyJwt(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return { valid: true, expired: false, payload };
  } catch (error) {
    return {
      valid: false,
      expired: error.code === "ERR_JWT_EXPIRED",
      payload: null,
    };
  }
}
