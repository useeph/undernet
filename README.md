# UNDERNET — a survival suite for a dystopian world

Four tools. Zero servers. Each one is a single HTML file — pass them on a USB stick.

Built for **Patriot HackFest Fall 2026** · Track: *Best Solution for a Dystopian World*

| Tool | File | What it does |
|---|---|---|
| **DEADDROP** | `index.html` | Serverless P2P encrypted messenger with self-destruct + BURN |
| **VIGIL** | `vigil.html` | Dead-man's switch: miss a check-in, your sealed payload releases to trusted contacts |
| **PANOPTICON** | `panopticon.html` | Live demo of everything your browser leaks with zero permissions — plus countermeasures |
| **RATION** | `ration.html` | Fair-allocation engine for scarce community supplies, with scenario planning |
| **BLINDSPOT** | `blindspot.html` | Interactive map of the surveillance grid — cameras, checkpoints, drone zones, safe houses — synced peer-to-peer by export/import ("sneakernet"), no server |

## VIGIL — dead-man's switch

Payload sealed with AES-256-GCM the moment you arm it. A countdown runs; pressing CHECK IN is proof of life. Miss the deadline and the vault unseals and prepares transmission to your contact. Master phrase (SHA-256 gated) required to view or disarm — but *not* to check in. Includes a 30-second demo mode for judging.
*Honest note:* this prototype keeps key escrow in the browser and transmits via a prepared email; the production design is server-side escrow or Shamir secret-sharing split across the contacts themselves, so no single machine holds the key.

## PANOPTICON — see what they see

Harvests your device's fingerprint live — GPU, canvas hash, timezone, battery, hardware, typing cadence, mouse telemetry — requesting **zero** permissions, exactly as any website silently can. Computes an exposure index, then shows the countermeasure for each leak. The point: you can't resist surveillance you can't see.

## BLINDSPOT — map what watches you

A live Leaflet map (OpenStreetMap tiles, restyled dark) where the community logs the surveillance grid: cameras with coverage radii, checkpoints, drone patrol zones — and the assets that matter more: safe houses and observed dead zones. Tap a tool, tap the map. Data never leaves the device: the grid is shared by EXPORT → paste → IMPORT merge between trusted people ("sneakernet sync"), and BURN MAP wipes everything. Seeded with demo data around the GMU Fairfax campus. *(Demo data is fictional.)*

## Algorithms under the hood

- **BLIND ROUTE (BLINDSPOT):** A* pathfinding over a 90×90 cost grid where camera and drone coverage, checkpoint proximity, and dead zones shape the terrain — it finds the lowest-surveillance walking path between any two points and reports the exposure cut vs. the straight line.
- **Depletion forecasting (RATION):** linear burn-rate projection per resource at the current ration level, with a ±15% demand-noise band yielding best/worst-case dry dates and a projection sparkline.
- **Identifiability model (PANOPTICON):** per-signal surprisal estimates (based on published fingerprinting studies) summed into a bits-of-identifying-information score — most visitors exceed the ~33 bits needed to be unique on Earth.
- **Keystroke-dynamics biometric (PANOPTICON):** live mean/variance signature of typing rhythm, demonstrating cookie-less behavioral re-identification.
- All hand-rolled in vanilla JS — no frameworks, no model downloads, keeps the zero-dependency, works-offline story intact.

## RATION — fairness as infrastructure

A settlement's supplies (water, food, medicine, power) vs. its households. Computes days-of-supply, and a ration level that stretches stock across a planning horizon. Children weighted at 0.7 consumption, medical households at 4× medicine. Stress-test with sliders: supply shocks, new arrivals. The allocation algorithm is public and proportional — everyone can verify their share.

---

# DEADDROP

**Serverless resistance comms.** When the network falls — or is watching — DEADDROP still talks.

## The premise

Every mainstream messenger depends on infrastructure someone else controls: accounts, servers, logs. In a surveillance state, that infrastructure *is* the threat. DEADDROP removes it.

## How it works

- **Direct peer-to-peer.** Messages travel device-to-device over WebRTC data channels. No server relays, stores, or can subpoena them. A public signaling broker is touched once per session only to exchange connection info — it never sees a message.
- **No accounts, no identity.** Each session generates a disposable callsign (e.g. `GHOST-A7K2`). Share it out loud, on paper, however you trust. Close the tab and you never existed.
- **Two layers of encryption.** WebRTC's mandatory DTLS encrypts the wire. Optionally, both sides enter a shared *channel phrase*: messages are then also sealed end-to-end with AES-256-GCM (PBKDF2-derived key, 150k iterations) *before* leaving the device.
- **Self-destructing messages.** Per-message fuse (10/30/60s) redacts the message on both ends.
- **BURN.** One tap wipes the entire conversation on both devices. Nothing is ever written to disk.

## Run it

It's one HTML file. No build, no install, no backend.

1. Host `index.html` anywhere static (GitHub Pages, Netlify) and open it on two devices, **or** open the file directly in two browsers.
2. Each device shows a callsign. On one device, enter the other's callsign (and optionally a shared channel phrase) → CONNECT.
3. Talk. Burn. Disappear.

## Stack

Vanilla JS · WebRTC via [PeerJS](https://peerjs.com) · WebCrypto (AES-GCM, PBKDF2) · zero dependencies beyond one CDN script · zero servers

## Honest threat-model notes (judges ask)

- The PeerJS public broker learns that two callsigns connected (metadata), not what they said. A self-hosted broker or local-network-only discovery removes even that — our top roadmap item.
- Without a channel phrase, security is transport-level (DTLS) only.
- Roadmap: multi-hop relay between peers (true mesh), QR-code callsign exchange, broker self-hosting on a Raspberry Pi.
