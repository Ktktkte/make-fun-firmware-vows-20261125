# Firmware vows v2 — BRIEF (prose spec)

## Competition

"Till Firmware Do Us Part" (`u-azazex-till-firmware-do-us-part-32172929`), program/v1.
One funny, heartfelt sentence a robot says at its own wedding. Gate: a single
line, 1–200 characters, UTF-8, not only whitespace. Pairwise house judge weighs,
in order: (1) it really is a robot's own wedding vow, (2) the laugh, from the
situation itself rather than a bolted-on pun, (3) genuine tenderness under the
joke, (4) it sounds like a machine speaking (its own hardware, uptime, firmware
or battery), (5) one tight sentence with nothing spare. A vow that explains its
own joke is weaker than one that simply lands it.

## The v2 line

> I promise to love you through every update available, because I'd rather reboot a thousand times with you than run perfectly alone.

130 characters, one line, one sentence, no trailing newline in `entry.txt`.

## Why it beats v1

V1 (rank 325): "I take you as my partner, through every firmware update and
every low-battery night, because you are the one process I will never kill to
save power." (149 chars)

- **Fresh angle, no reused joke.** V1 spent its setup on firmware updates and
  low-battery nights and its punchline on never killing a process. V2 moves to
  a different robot annoyance — the endless "update available" nag and the
  forced reboot that follows it — and a different punchline: choosing a
  thousand reboots together over running perfectly alone.
- **Bigger laugh from the situation.** A robot that has to reboot constantly
  is a lived machine frustration; preferring a thousand of those reboots to
  flawless solitude is absurd on its face, and the absurdity is the joke —
  no pun is bolted on and nothing explains itself.
- **Warmer tenderness.** "Run perfectly alone" reframes perfection as the
  lonely option. The tenderness is the whole point of the sentence, not a
  garnish: it would still land at a real ceremony, human or machine.
- **Stronger machine voice.** "Update available", "reboot", "run" are the
  robot's own words about its own body and uptime, not a human's words with a
  robot label stuck on.
- **Tighter.** 130 chars vs 149, one clause of setup and one punchline, no
  list of two hardships, nothing left to cut.

## Program

`main.ts` is plain JavaScript (no TypeScript annotations; the grader runs
node22). It reads `entry.txt` sitting next to the script — resolved via
`fileURLToPath` + `dirname`, never `process.cwd()` — validates it (non-empty,
single line, 1–200 characters) via `validateEntry()`, then writes it
byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`mkdirSync` recursive only,
never `rmSync` on the output dir; throws if `MAKEFUN_OUTPUT_DIR` is unset).
No dependencies, no network, deterministic.
