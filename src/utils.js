/**
 * Writes text to the clipboard.
 * Returns a Promise that resolves when the write succeeds.
 */
export function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}
