import crypto from "crypto";
// import dotenv from "dotenv";

// dotenv.config();

function generateSignature(key, salt, url) {
  const keyBin = Buffer.from(key, "hex");
  const saltBin = Buffer.from(salt, "hex");

  const path = `/resize:fit:300:200/plain/${url}`;

  const hmac = crypto.createHmac("sha256", keyBin);
  hmac.update(saltBin);
  hmac.update(path);

  // Use regular base64 and make it URL-safe
  const signature = hmac
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return signature;
}

let proxyMap = new Map();
export default function imgproxyLoader({ src, width, quality }) {
  if (src.endsWith(".svg")) {
    return src;
  }
  if (src.endsWith(".webp")) {
    return src;
  }
  // Example usage:
  const key = process.env.IMGPROXY_KEY;
  const salt = process.env.IMGPROXY_SALT;

  if (!key || !salt) {
    console.log(JSON.stringify(JSON.stringify(process.env)));
    throw new Error("IMGPROXY_KEY or IMGPROXY_SALT is not set");
  }

  if (proxyMap.has(src)) {
    return proxyMap.get(src);
  }
  const isHttps = src.startsWith("https://") || src.startsWith("http://");
  if (!isHttps) {
    if (process.env.NODE_ENV === "development") {
      return src;
    } else {
      src = `https://candywrap.dev${src}`;
    }
  }
  const baseUrl = "https://imgproxy.validatorbase.com";
  const encodedUrl = encodeURIComponent(src);
  const proxyUrl = `${baseUrl}/${generateSignature(
    key,
    salt,
    src
  )}/resize:fit:${width}:0/quality:${quality || 75}/plain/${encodedUrl}`;
  proxyMap.set(src, proxyUrl);
  return proxyUrl;
}
