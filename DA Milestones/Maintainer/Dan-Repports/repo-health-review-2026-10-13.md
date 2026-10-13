# Repository Health Review — 2026-10-13

**Repo:** [IntersectMBO/developer-experience](https://github.com/IntersectMBO/developer-experience)  
**Reviewer:** Dan Baruka  
**Date:** 2026-10-13  
**Branch under test:** `main` at `1cd1b09`  
**Scope:** CI/CD, dependencies, backlog

---

## Executive summary

| Area | Status | Notes |
| --- | --- | --- |
| CI/CD | Improved, still duplicated | Pull-request website builds exist (#308). `main` still runs two Pages workflows |
| Dependencies | Needs a pin refresh | 40 open Dependabot alerts. `undici` accounts for most of them |
| Backlog | Small and current | 6 open issues. Session 22 docs are in review (#309) |
| Local build | Pass | `cd website && npm run build` succeeds on `main` |

**Since the 2026-08-05 snapshot**

| Metric | 2026-08-05 | 2026-10-13 |
| --- | --- | --- |
| Pull-request website build | Missing | Present (`pr-build-website.yml`, #308) |
| Open Dependabot alerts | 0 | **40** |
| Open issues | 15 | **6** |
| Sessions widget | Hidden while paused | Restored (#297) |

---

## 1. CI/CD

### What exists on main

| Workflow | Trigger | Role |
| --- | --- | --- |
| `.github/workflows/deploy.yml` | Every push to `main` | Cached `npm ci`, Docusaurus build, Pages deploy |
| `.github/workflows/static.yml` | `website/**` pushes to `main` | Second build and deploy, `npm install`, no npm cache |
| `.github/workflows/pr-build-website.yml` | Pull requests touching `website/**` | `npm ci` and `npm run build` (#308) |
| `.github/workflows/changelog.yml` | Version tags | Runs `npm ci` at the repo root, where there is no `package.json` |
| `.github/workflows/stale.yml` | Daily | Stale-issue labels from `TRIAGE.md` |

### Findings

1. **Duplicate Pages deploys are still on main.** `deploy.yml` and `static.yml` both publish `github-pages`. A website change pays for two installs and two deploys.
2. **PR builds do not cancel superseded runs** and do not pass `GITHUB_TOKEN` into `scripts/fetch-github-data.js`, so the prebuild fetch can hit the unauthenticated rate limit.
3. **`deploy.yml` has no path filter**, so non-site commits on `main` still rebuild the docs site.
4. **Changelog job is still pointed at the wrong directory.**

---

## 2. Dependencies

Open Dependabot alerts on `main`: **40**.

Largest groups: `undici` (pinned at 7.29.0, fixes start at 7.29.1), then `fast-uri`, `brace-expansion`, `joi`, `postcss`, `webpack-dev-server`, `websocket-driver`, `shell-quote`, `http-proxy-middleware`, and `body-parser`.

`website/package.json` already carries `overrides` and `resolutions`, but several pins sit inside the current advisory ranges. `image-size` remains the vendored 2.0.3 copy from #295.

`npm audit` on a fresh tree is noisier than Dependabot because Docusaurus aggregates transitive findings. Do not clear that with `npm audit fix --force`; it proposes downgrading Docusaurus.

---

## 3. Backlog

### Open issues

| Issue | Title |
| --- | --- |
| [#302](https://github.com/IntersectMBO/developer-experience/issues/302) | Update and verify Blaze SDK + Yaci Store integration guide |
| [#301](https://github.com/IntersectMBO/developer-experience/issues/301) | Update code samples so tutorials build and run |
| [#300](https://github.com/IntersectMBO/developer-experience/issues/300) | Component and design-token baseline |
| [#298](https://github.com/IntersectMBO/developer-experience/issues/298) | Add CodeQL static analysis workflow |
| [#265](https://github.com/IntersectMBO/developer-experience/issues/265) | CIP-30 wallet connect tutorial |
| [#264](https://github.com/IntersectMBO/developer-experience/issues/264) | Default Cardano developer environment how-to |

### Open pull requests

| PR | Title |
| --- | --- |
| [#309](https://github.com/IntersectMBO/developer-experience/pull/309) | Q4 Session 22: AI-ready Cardano repos |
| [#318](https://github.com/IntersectMBO/developer-experience/pull/318) | Dependabot: mermaid 11.17.2 to 12.1.0 |
| [#317](https://github.com/IntersectMBO/developer-experience/pull/317) | Dependabot: dotenv 17.3.1 to 18.0.7 |
| [#316](https://github.com/IntersectMBO/developer-experience/pull/316) | Dependabot: `@types/node` 25.6.0 to 26.6.5 |

Closed since August that matter here: #286 and #295 (audit remediation), #297 (sessions button restored), #308 (PR build gate).

---

## 4. Priorities

1. Keep a single Pages workflow and stop the changelog job from installing at the repo root.
2. Move dependency pins past the published advisory ranges, then re-check Dependabot.
3. Keep human review on every merge. CI and dependency updates do not replace it.
4. CodeQL is still the open static-analysis gap (#298).
