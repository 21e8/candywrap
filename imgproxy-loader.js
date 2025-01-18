import crypto from "crypto";
function generateSignature(key, salt, url, width, height, quality) {
  const keyBin = Buffer.from(key, "hex");
  const saltBin = Buffer.from(salt, "hex");
  const encodedUrl = encodeURIComponent(url); // Encode URL before signature
  const path = `/resize:fit:${width}:${height || 0}/quality:${
    quality || 75
  }/plain/${encodedUrl}`; // Use encoded URL in path

  const hmac = crypto.createHmac("sha256", keyBin);
  hmac.update(saltBin);
  hmac.update(path);

  return hmac
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export default function imgproxyLoader({ src, width, height, quality }) {
  const key = process.env.IMGPROXY_KEY;
  const salt = process.env.IMGPROXY_SALT;
  const enabled = process.env.IMGPROXY_ENABLED;
  if (enabled !== "true") {
    return src;
  }

  if (!key || !salt) {
    console.log(JSON.stringify(JSON.stringify(process.env)));
    throw new Error("IMGPROXY_KEY or IMGPROXY_SALT is not set");
  }

  const isHttps = src.startsWith("https://") || src.startsWith("http://");
  if (!isHttps) {
    if (process.env.NODE_ENV === "development") {
      return src;
    } else {
      src = `https://beta.validatorbase.com${src}`;
    }
  }
  const baseUrl = "https://imgproxy.validatorbase.com";
  const encodedUrl = encodeURIComponent(src);
  const proxyUrl = `${baseUrl}/${generateSignature(
    key,
    salt,
    src,
    width,
    height,
    quality
  )}/resize:fit:${width}:${height || 0}/quality:${
    quality || 75
  }/plain/${encodedUrl}`;
  return proxyUrl;
}
