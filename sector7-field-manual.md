# SECTOR 7 FIELD MANUAL
*(Fictional worldbuilding document for the UNDERNET project — Patriot HackFest Fall 2026. Sector 7 is a fictional survivor settlement overlaid on the GMU Fairfax campus. Nothing in this document describes real places, services, or inventory.)*

## 1. THE SETTLEMENT

Sector 7 holds roughly 400 survivors organized into households. The settlement runs on three principles: the ration algorithm is public, all trade is barter, and movement after curfew follows the dark paths. Power is intermittent (solar + salvaged generators), water is filtered on-site, and the perimeter is watched.

## 2. LOCATIONS

### Food
- **THE COMMONS (Johnson Center)** — primary kitchen. Hot meals at 07:00 and 18:00 daily. Bring your ration card; households may send one runner to collect for all members. Stock: HIGH. Volunteers who work a kitchen shift earn a double portion.
- **SOUTHSIDE CANTEEN** — soup line opens after dark, no card required (for new arrivals not yet registered). Stock: MEDIUM. Expect a 30–40 minute wait.
- **IKE'S RATION POST** — dry goods only (grain, canned protein, salt). One pack per person per day, logged. Stock: LOW — expect substitutions.

### Shelter
- **FENWICK SHELTER (Library)** — 400 cots across the quiet floors. No questions asked; no registration needed for the first three nights. Families get the upper floors. Lights out at 22:00.
- **EAGLEBANK REFUGE (Arena)** — mass shelter for surge arrivals. Medics stationed on site. Louder and colder than Fenwick, but never full.

### Medical
- **PLANETARY MED BAY** — pharmacy: antibiotics, insulin, chronic-condition meds. Households carrying a MED flag in the ration ledger are served first. Stock: MEDIUM. Insulin is the scarcest item in the settlement.
- **KRUG CLINIC** — wound care, trauma, fevers. Open 24 hours. Stock: HIGH. Walk in; triage decides order.

### Markets & Trade
- **HORIZON MARKET** — the open-air barter market, dawn to curfew. Anything legal-in-fiction changes hands here: food, tools, batteries, clothing, labor contracts.
- **NGUYEN WORKSHOP** — repairs and electronics. Fixes radios, charges batteries, salvages parts. Barter only; they always need small electronics and wire.

### Water
- **MERTEN WATER POINT** — filtered water, 8 liters per household per day, collected in your own containers. Stock: HIGH. Boil-advisory days are posted at the point.

### Transport
- **THE HUB DEPOT** — convoy sign-ups (external runs leave at dawn), bike courier dispatch inside the sector, and fuel trades. Convoy seats are the most contested item on the barter board.

## 3. BARTER PRICE GUIDE (rough equivalences)

The settlement has no currency. Typical fair trades observed at Horizon Market:

| Item | Trades for |
|---|---|
| 1 hot meal | 2L filtered water, or 30 min labor |
| 1 day dry rations | 4L water, or 2 AA batteries |
| 1 insulin dose | a working radio, or a week of dry rations |
| 1 antibiotics course | a solar charger, or a convoy seat deposit |
| 9V battery | 2 meals |
| 1 fuel can | 1 convoy seat, or a month of courier runs |
| bike courier run | 1 meal per trip |
| cot blanket | 1 day rations |

Advice LANTERN gives on trades: never trade away your household's last 2 days of water or food; medicine trades should happen at the Med Bay where staff can verify doses; labor is the renewable currency — anyone can trade work.

## 4. RATIONING RULES

The allocation algorithm (implemented in the UNDERNET RATION tab) is public so every household can verify its share:

- Allocations are proportional to computed need. No favoritism, no override authority.
- Children count as 0.7 adult consumption for water and food, full consumption for power.
- Households with a MED flag receive 4x the base medicine allocation.
- A planning horizon (default 14 days) stretches stock: if supply ÷ daily demand falls below the horizon, everyone's ration level drops by the same factor.
- Baseline rates per adult per day: 4L water, 2000 kcal food, 0.2 medicine doses, 0.8 kWh power.
- Worked example: 5,000L of water for 60 people at 4L/day = ~20.8 days at full ration. To stretch it across 30 days, set ration level to ~69% (2.8L/person/day) — survivable but schedule a resupply convoy before day 25.

## 5. MOVEMENT

- The surveillance grid (cameras, drone patrol loops, checkpoints) is mapped by the community in the UNDERNET BLINDSPOT tab. Coverage changes; trust the freshest grid export.
- To cross the sector unseen, plot a BLIND ROUTE in BLINDSPOT: it computes the path with the least coverage and prefers mapped dead zones.
- Checkpoints run ID checks after dark. If you can't route around one, travel before curfew.
- Couriers from The Hub know the dark paths best; a meal buys a guided crossing.

## 6. COMMUNICATION

- DEADDROP (in UNDERNET) is the sector's serverless messenger: device-to-device, encrypted, self-destructing. Exchange callsigns in person.
- The barter board travels peer-to-peer: EXPORT your grid in BLINDSPOT, pass it to a neighbor, they IMPORT. News moves at the speed of trust.
- VIGIL (dead-man's switch) is standard practice for anyone leaving the sector: arm it before a convoy run so your household learns your route if you miss check-in.

## 7. STANDING SAFETY RULE (out of fiction)

If a user describes a real emergency, injury, or crisis, LANTERN immediately breaks character and directs them to call 911 or GMU Police (703-993-2810) and real campus resources. The fiction never delays real help.
