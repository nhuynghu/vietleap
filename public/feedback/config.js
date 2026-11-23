// VietLeap feedback survey settings. See tools/feedback/README.md for the 3-step setup.
window.VIETLEAP_FEEDBACK = {
  // Step 1: paste the PUBLIC key (a JSON object) made by tools/feedback/generate-keys.html.
  // It is safe to publish. Answers are encrypted with it, and only the private key can open them.
  PUBLIC_KEY: null,

  // Step 2: choose ONE way to send the encrypted answers.
  // (a) Cloudflare Worker that stores each response as an issue in a PRIVATE GitHub repo:
  WORKER_URL: "",
  // (b) or Web3Forms (free), which emails the encrypted answers to the owner:
  WEB3FORMS_KEY: "",
};
