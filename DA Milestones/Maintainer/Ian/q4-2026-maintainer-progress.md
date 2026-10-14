# Maintainer Progress Report — Q4 2026

**Programme:** Intersect Maintainer Retainer Program — Developer Experience
**Author:** Ian Njuguna ([@IanoNjuguna](https://github.com/IanoNjuguna))
**Period:** 2026-10-01 → 2026-10-14 (month to date)
**Repository:** [IntersectMBO/developer-experience](https://github.com/IntersectMBO/developer-experience), `main` at `d3877a9`
**Figures pulled:** 14 October 2026

---

## Summary

I'm on the Maintainer Retainer Program for Developer Experience: upwards of 40 hours a month across this repository and the wider Cardano developer community, with the triage cadence here as my standing responsibility.

| What I committed to | Where I am | Evidence from this period |
| --- | --- | --- |
| Continue triage and review activities | On track | 5 reviews (#309, #319, #320, #321, #322), 2 issues opened, 4 comments, and the queue sits at 10 open issues and 7 open PRs |
| Address minor fixes or usability gaps | On track | [#329](https://github.com/IntersectMBO/developer-experience/pull/329) opened and merged the same day, plus four more fixes open and passing CI (#328, #330, #331, #332) |
| Share a brief progress update | This report | — |

---

## 1. This month so far (1–14 October)

| What I did | Count |
| --- | --- |
| Pull requests opened | 5 |
| Pull requests merged | 1 |
| Pull requests reviewed | 5 |
| Issues opened | 2 |
| Issue comments | 4 |
| Commits (excluding merges) | 5 |

This is month to date, so it isn't comparable to a full month yet.

What the work was:

| PR | State | What it does |
| --- | --- | --- |
| [#329](https://github.com/IntersectMBO/developer-experience/pull/329) | Merged | The build-time GitHub fetch no longer counts bots and AI agent accounts as contributors |
| [#332](https://github.com/IntersectMBO/developer-experience/pull/332) | Open, CI green | Homepage cards underline on hover because the class name never matched the hashed CSS module rule |
| [#331](https://github.com/IntersectMBO/developer-experience/pull/331) | Open, CI green | Removes a hard-coded canonical link that would tell crawlers every page duplicates the site root |
| [#330](https://github.com/IntersectMBO/developer-experience/pull/330) | Open, CI green | Community metrics now show the date of the snapshot, and a failed fetch can't be stamped as fresh |
| [#328](https://github.com/IntersectMBO/developer-experience/pull/328) | Open, CI green | The site asked for Poppins and loaded Inter; Poppins is now loaded and self-hosted |

I also reviewed and approved #309, #319, #320, #321 and #322.

---

## 2. The last six months, month by month

| Month | PRs opened | PRs merged | Reviews | Issues opened | Comments | Commits |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-04 | 1 | 0 | 0 | 1 | 0 | 0 |
| 2026-05 | 1 | 0 | 0 | 0 | 0 | 3 |
| 2026-06 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2026-07 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2026-08 | 1 | 0 | 1 | 1 | 1 | 22 |
| 2026-09 | 6 | 7 | 7 | 3 | 2 | 30 |
| 2026-10 | 5 | 1 | 5 | 2 | 4 | 5 |
| **Total** | **14** | **8** | **13** | **7** | **7** | **60** |

September is where most of this landed: the design-token baseline, the brand kit page, the agent skills package and the pull-request build gate, all merged on 15 September (#304–#308).

June and July are quiet months in this repository. The figures above count contributions made inside each month, so that's what the data says rather than something I'm filtering out.

---

## 3. Triage and review

- I keep to the triage schedule in [TRIAGE.md](https://github.com/IntersectMBO/developer-experience/blob/main/TRIAGE.md).
- Five reviews this period, all approving: the September design-system series (#319–#322) and the Session 22 documentation (#309).
- Two issues opened: #323 (homepage card underlines, fixed by #332) and #324 (canonical URL on every page).
- Four comments across the issues that came out of the audit in section 4.
- The queue is at 10 open issues and 7 open PRs as of 14 October.

---

## 4. Minor fixes and usability gaps

Merged:

- **#329** — the build-time fetch filtered contributors on `type !== 'Bot'` plus a Dependabot name check, which misses accounts GitHub reports as `User`. A coding-agent account sat exactly on the 15th-item boundary, so it flickered in and out of the contributor list on the site. Now filtered by login pattern as well, so it can't.

Open and passing CI:

- **#328** — the CSS asked for Poppins while the loader only ever requested Inter, so every page rendered in the fallback face. Poppins is now served from our own origin with the licence texts beside it.
- **#330** — community metrics rendered with no date on them, and a failed build-time fetch still stamped the payload with the current time, so stale numbers looked fresh. The snapshot date is on the page now and a failed fetch can't look current.
- **#331** — a hard-coded canonical link in the site root would tell crawlers that every page duplicates `/`. As it happens Docusaurus's own per-page canonical overrides it, so the live site was fine, but it was one behaviour change away from breaking every page at once, so I removed it.
- **#332** — homepage cards underlined on hover because the class name was passed as a plain string while the rule lives in a hashed CSS module.

I filed #323, #324, #325, #326 and #327 out of the same audit.

---

## 5. Design system and UX

The design-token baseline (#300) is the umbrella for this work, and the landing page is where it either holds or slips. What I measured:

| Surface | Tokens used | Raw values |
| --- | --- | --- |
| `CommunitySection/MonthlyPulse.module.css` | 0 | 14 px, 3 hex, 9 rgba |
| `HomepageFeatures/styles.module.css` | 7 | 21 px, 3 hex, 17 rgba, 4 gradients |
| `MeetupReminderButton/styles.module.css` | 58 | 67 px, 30 hex, over 712 lines |

The baseline itself says "no gradients, no blend modes, no transparency tricks. Solid fills only", so some of those values aren't just inconsistent, they're against our own rule.

I published a nine-step plan for the landing page in #300: agree the direction and structural spec first, then tokens, motion, hero, feature cards, community section, the DevEx Sessions floater (which is site chrome and renders on every page), a guardrail check, and a performance budget. The same comment carries the design references the direction is drawn from and the questions I put to the community.

---

## 6. Tutorial refactor and where it's stuck

Open work: #301 (code samples so tutorials build and run), #302 (Blaze SDK and Yaci Store guide), #264 (default developer environment), #265 (CIP-30 wallet connect).

Several of these tutorials need a running Cardano node to verify against, and the machine I have doesn't carry the RAM for it. I've ordered a workstation for exactly this. It's in transit by sea and should land in about two weeks. Until it does I can only verify the parts that don't need a node; once it arrives I expect to move a lot faster on this.

---

## 7. Beyond this repository

- **Working-group and community calls** — I sit in the Developer Experience working-group sessions and community calls. That's the core of the 40 hours.
- **CIP meetings** — I attend and take part in the CIP process.
- **Constitutional committee** — I stood for election.
- **Piece of Pie Hackathon** (Gimba Labs and the Cardano Foundation) — I took part.
- **African Blockchain Festival** — I'll be there.
- **Cardano Hub Nairobi** — I'm in Nairobi and available at the hub when they need me.
- **Collaborations** — I'm building relationships with communities across the ecosystem, GameChanger Finance and Gimba Labs among them.
- **Standards** — I commented in the CIP-0068 thread on NFTs without an image ([CIPs #1292](https://github.com/cardano-foundation/CIPs/issues/1292), 13 October), making the case for the machine-identity side of it: assets that give a DID to an agent, machine or robot, why that use case is going to grow, and whether it needs a token standard of its own rather than a general one.
- **Working with Dan Baruka** — I'm learning a lot from how he runs reviews on this repository: evidence for every finding, measured against the previous snapshot, priorities named at the end. It's the standard I'm trying to hit.

The one item here anyone can check for themselves is the CIP-0068 comment linked above.

---

## 8. What I want to put more into

1. **Responding to developers faster** — shorter time to a first real answer on issues, questions and pull requests, and keeping the triage cadence visible so people know when to expect a response.
2. **AI in the Cardano protocol** — going deeper on agent-facing primitives, starting with DID for x402 agents and what it would take to make that a workable standard.
3. **HSK** — I'm studying Mandarin to grow as a person and to be more useful in the ecosystem, and that's the whole reason. I want to be clear it isn't a market bet: China isn't a growing Cardano market as far as I can see. The Asian focus has been Japan, events in Korea and China have been notably absent compared with other regions, the Chinese community has firewall and language barriers in the way, and the developer growth is in South and Southeast Asia — India, Pakistan, Indonesia, Vietnam, the Philippines. So: personal goal, stated as one.
4. **Community collaboration** — turning conversations with communities like GameChanger Finance and Gimba Labs into ongoing channels, and staying present at the Cardano Hub in Nairobi.

---

## 9. How I counted these numbers

Everything above comes from the repository and the GitHub API on 14 October 2026, so anyone can re-run it:

| Figure | How I got it |
| --- | --- |
| PRs opened / merged | `gh pr list --repo IntersectMBO/developer-experience --author IanoNjuguna --state all --limit 100 --json createdAt,mergedAt` — opened by creation month, merged by merge month |
| Reviews | `gh api repos/IntersectMBO/developer-experience/pulls/<n>/reviews` for the PRs returned by `gh search prs --reviewed-by IanoNjuguna`, counted by submission date |
| Issues opened | `gh search issues --repo IntersectMBO/developer-experience --author IanoNjuguna --created 2026-04-01..2026-10-15` |
| Comments | `gh api repos/IntersectMBO/developer-experience/issues/<n>/comments` on the issues I took part in |
| Commits | `git log --no-merges --author=inc3099@gmail.com --since=... --until=...` |
| Queue | `gh api '/search/issues?q=repo:... type:issue is:open&per_page=1'`, read from `total_count` |

Two things worth knowing about them:

- The monthly figures count contributions I made inside each month, not items that happened to be updated. Reviews and comments come from the items the searches returned; anything I was assigned but never touched in the window doesn't count towards them.
- I checked two of the figures a second way: merged PRs come out at 8 both by counting merge dates and by `gh search prs --merged`, and commits come out at 60 both by email and by line count. October is half a month, so it shouldn't be read alongside the completed months.
