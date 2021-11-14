export default function prettyJson(
  x: number | boolean | string | Record<string, unknown>
) {
  return JSON.stringify(x, null, 2);
}
