# VietLeap post-hackathon feedback survey

The survey page lives at `public/feedback/` and is published with the website at
`https://vietleap2026.com/feedback/`.

## How results stay private

1. Each answer set is encrypted **in the participant's browser** with a public key (RSA-OAEP + AES-GCM).
2. Only the matching **private key**, which only the owner holds, can decrypt it.
3. Even if responses are stored somewhere visible, they look like `VLF1.eyJr...` and cannot be read without the key.

## Setup (about 15 minutes)

**Step 1: make the keys.** Open `tools/feedback/generate-keys.html` on your own computer. Click *Generate keys*.
Copy the public key into `public/feedback/config.js` (`PUBLIC_KEY`). Download the private key file and keep it secret
(password manager or encrypted drive). Never commit it.

**Step 2: choose where responses go** (fill in one of these in `public/feedback/config.js`).

- **A. Private GitHub repo (responses stay on GitHub).**
  1. Create a **private** repo, e.g. `vietleap-feedback`.
  2. Create a fine-grained token limited to that repo with *Issues: Read and write*.
  3. In Cloudflare, create a Worker with `tools/feedback/worker.js`, add the secret `GITHUB_TOKEN` and the variables
     `FEEDBACK_REPO` and `ALLOWED_ORIGINS` (`https://vietleap2026.com`), then put the Worker URL in `WORKER_URL`.
- **B. Web3Forms (no code).** Create a free access key at web3forms.com using the owner's email and put it in `WEB3FORMS_KEY`.
  Each response arrives by email as an encrypted block.

**Step 3: publish.** Merge to `main`. The existing GitHub Pages workflow deploys the page.

## Reading the results

Open `tools/feedback/decrypt.html` on your own computer, choose the private key file, paste the issue bodies or emails
(or load them as a text file), click *Decrypt*, and download the CSV. Nothing leaves your computer.

## Notes

- The page stays disabled ("not open yet") until `PUBLIC_KEY` and a destination are configured, so no answers are lost.
- Lose the private key and the responses cannot be recovered. Back it up.
- The survey page asks for names and universities. Tell participants how the data will be used.
