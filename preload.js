// preload.js

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
});
