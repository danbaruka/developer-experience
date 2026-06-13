---
sidebar_position: 4
title: Core Protocol Contributor
---

# Becoming a Core Protocol Contributor

This guide is for systems engineers, compiler writers, protocol researchers, formal methods practitioners, and Haskell or Rust developers who want to contribute to the **core of Cardano** — not just build applications on top of it.

This is a **parallel track**, not a destination you reach after shipping a dApp. If your background is in programming languages, distributed systems, cryptography, or formal verification, this is your entry point.


## The Two Main Paths

### Path A — Haskell: Ledger & Consensus

The core of Cardano is implemented in Haskell across several tightly coupled repositories. Start with `cardano-ledger` for ledger rules or `ouroboros-consensus` for chain selection and block validation — these are the two deepest entry points.

| Repository | What it governs | Where to start |
|---|---|---|
| [`cardano-ledger`](https://github.com/IntersectMBO/cardano-ledger) | All ledger rules — how transactions are validated, how state transitions work using the STS framework | [Good first issues](https://github.com/IntersectMBO/cardano-ledger/issues?q=is%3Aopen+label%3A%22good+first+issue%22) |
| [`ouroboros-consensus`](https://github.com/IntersectMBO/ouroboros-consensus) | The Ouroboros consensus algorithm, chain selection, and block validation | [Good first issues](https://github.com/IntersectMBO/ouroboros-consensus/issues?q=is%3Aopen+label%3A%22good+first+issue%22) |
| [`ouroboros-network`](https://github.com/IntersectMBO/ouroboros-network) | The peer-to-peer networking layer — mini-protocols, connection management | [Issues](https://github.com/IntersectMBO/ouroboros-network/issues) |
| [`cardano-node`](https://github.com/IntersectMBO/cardano-node) | The node executable that ties ledger, consensus, and networking together | [Issues](https://github.com/IntersectMBO/cardano-node/issues) |
| [`cardano-api`](https://github.com/IntersectMBO/cardano-api) | High-level Haskell library over ledger/consensus; the interface used by CLI and tooling | [Good first issues](https://github.com/IntersectMBO/cardano-api/issues?q=is%3Aopen+label%3A%22good+first+issue%22) |
| [`cardano-cli`](https://github.com/IntersectMBO/cardano-cli) | The official command-line interface — good for contributor-friendly Haskell issues | [Good first issues](https://github.com/IntersectMBO/cardano-cli/issues?q=is%3Aopen+label%3A%22good+first+issue%22) |
| [`cardano-base`](https://github.com/IntersectMBO/cardano-base) | Shared cryptography, slotting, and binary serialization libraries used across the stack | [Issues](https://github.com/IntersectMBO/cardano-base/issues) |
| [`plutus`](https://github.com/IntersectMBO/plutus) | The Plutus Core language and execution engine — compiler, evaluator, cost models | [Good first issues](https://github.com/IntersectMBO/plutus/issues?q=is%3Aopen+label%3A%22good+first+issue%22) |



Before navigating any of these repos, read the [Cardano Blueprint](https://cardano-scaling.github.io/cardano-blueprint/introduction/index.html) — it is the clearest available explanation of how the node, ledger, and consensus layers fit together, written without assuming you already know the codebase.

For a full list of core IntersectMBO repositories, see the [Essential Repositories](../../resources/repositories.md) page.

### Path B — Rust: Protocol Libraries & Alternative Node Implementations

The Rust ecosystem offers a more accessible entry point than the Haskell path: standard `cargo` toolchain (no Nix required for most projects), faster review cycles, and well-labelled first issues. The key decision is which layer of the stack you want to work on.

**Choose your focus:**

| Goal | Start here |
|---|---|
| Understand and implement protocol primitives (CBOR encoding, mini-protocols, crypto types) | [Pallas](https://github.com/txpipe/pallas) |
| Build or contribute to a full Rust Cardano node | [Amaru](https://github.com/pragma-org/amaru) |
| Work on chain data access and indexing at the node level | [Dolos](https://github.com/txpipe/dolos) |
| Build event streaming pipelines from the chain | [Oura](https://github.com/txpipe/oura) |
| Off-chain transaction building in Rust | [Whisky](https://github.com/sidan-lab/whisky) |

**The dependency between these projects:**

```
Pallas (protocol primitives)
  ├── Dolos (data node built on Pallas)
  ├── Amaru (full node — uses Pallas primitives)
  └── Oura (event pipeline built on Pallas)
```

Start with Pallas if you are new to the Cardano protocol. Its primitives crate is the shared foundation: once you understand CBOR encoding, the UTxO model in Rust types, and the mini-protocol framing, contributing to Amaru or Dolos becomes significantly easier.

**Progression for Pallas:**

1. Clone the repo and run `cargo build` — it just works, no special setup
2. Read the [`pallas-primitives`](https://github.com/txpipe/pallas/tree/main/pallas-primitives) crate — this is the Cardano data model in Rust
3. Read the [`pallas-network`](https://github.com/txpipe/pallas/tree/main/pallas-network) crate — the mini-protocol implementation
4. Find a [good first issue](https://github.com/txpipe/pallas/issues?q=is%3Aopen+label%3A%22good+first+issue%22) in the codec, network, or traverse modules
5. Open a PR — review cycles are typically days, not weeks

**Progression for Amaru (the deeper path):**

1. Read the [Cardano Blueprint](https://cardano-scaling.github.io/cardano-blueprint/introduction/index.html) — the implementation-independent guide to how the protocol works; essential before reading Amaru's code
2. Read the [Amaru architecture docs](https://github.com/pragma-org/amaru) in the repo — understand how it decomposes the node into ledger, consensus, and network stages
3. Read the relevant formal spec section for the area you want to contribute to (ledger rules → Shelley/Conway spec; consensus → Ouroboros Praos paper — same specs as the Haskell path, same ground truth)
4. Get Pallas familiarity first — Amaru builds on Pallas types extensively
5. Find a [good first issue](https://github.com/pragma-org/amaru/issues?q=is%3Aopen+label%3A%22good+first+issue%22) — ledger rule implementations and test coverage are the most accessible areas
6. Conformance testing between Amaru and the Haskell node is high-value work that requires understanding the formal specs but not Haskell fluency — this is a strong first contribution area

> **Important**: Amaru implements the same formal specifications as the Haskell node. Any work on Amaru's ledger or consensus logic requires reading the same specs listed in the [Formal Specifications](#the-formal-specifications) section below — the Rust path does not skip that step.


## Step 0: The Dependency Wall (Read This First)

Every core Cardano repository — `cardano-node`, `cardano-ledger`, `ouroboros-consensus`, `cardano-api`, Pallas, Dolos — has a complex dependency graph involving GHC version constraints, C library dependencies, cryptographic primitives, and cross-platform linker flags.

**Attempting to resolve this manually will fail.** Depending on your OS and distribution, it ranges from painful to impossible. On NixOS specifically, non-Nix builds do not work by design.

**[Nix](https://nixos.org/download) is the standard working environment for contributors to these projects.** A `nix develop` invocation drops you into an environment where all dependencies are pinned, present, and working.

Getting started with Nix:
- [`nix-installer` by Determinate Systems](https://github.com/DeterminateSystems/nix-installer) — the recommended installer
- [`devenv`](https://devenv.sh/) — a developer-friendly layer on top of Nix
- Each repo's `flake.nix` or `shell.nix` defines the development shell — run `nix develop` from the repo root

This is not an arbitrary requirement. Nix is what makes an otherwise intractable dependency problem manageable for everyone on the same codebase.


## Reading Before You Code: The Cardano Blueprint

Before diving into any repository — Haskell or Rust — read the **[Cardano Blueprint](https://cardano-scaling.github.io/cardano-blueprint/introduction/index.html)**.

The Blueprint is implementation-independent documentation that explains how the Cardano protocol actually works: written in accessible Markdown with diagrams and test data, not dense academic LaTeX. It is maintained by the community specifically to help node developers and contributors understand the protocol without needing to reverse-engineer it from the Haskell source. It covers the node architecture, the ledger state machine, consensus mechanics, and the networking layer — the same territory you will encounter in both `cardano-ledger`/`ouroboros-consensus` and in Amaru/Pallas.

Read this first. It will make every other document and codebase significantly easier to navigate.

## The Formal Specifications

The formal specifications define **what correct behavior looks like** at the mathematical level. Both the Haskell node and Amaru must match them. Once you have the Blueprint as context, these become readable.

| Document | What it specifies |
|---|---|
| [Cardano Blueprint](https://cardano-scaling.github.io/cardano-blueprint/introduction/index.html) | Implementation-independent protocol guide — start here before the specs below |
| [Shelley Ledger Formal Spec](https://github.com/IntersectMBO/cardano-ledger/releases) | The foundational ledger rules using small-step semantics (STS) |
| [Conway Ledger Spec](https://github.com/IntersectMBO/cardano-ledger/releases) | CIP-1694 governance, DRep ratification, committee logic |
| [Ouroboros papers](https://iohk.io/en/research/library/) | The family of consensus protocol proofs (Classic, BFT, Praos, Genesis) |

The STS (small-step semantics) framework that governs all ledger rules is the conceptual backbone of `cardano-ledger`. Understanding it is the difference between reading the code and understanding it.


## Your Most Accessible Entry Point: Testing

You do not need to implement a new ledger rule to make a valuable core contribution. **Writing tests is often where new contributors start**, and it is high-value work.

`cardano-ledger` has substantial test infrastructure built on property-based testing:

- **[Hedgehog](https://github.com/hedgehogqa/haskell-hedgehog)** and **[QuickCheck](https://github.com/nick8325/quickcheck)** are used throughout
- **Conformance testing** — verifying that alternative implementations (Rust, etc.) match the Haskell ledger rules — is an ongoing effort and a legitimate core contribution
- The test suite documents expected behavior; writing a test for an existing rule is a concrete, reviewable contribution

**Good first issues in the testing area:**
- Search for `good first issue` or `testing` labels in [`cardano-ledger` issues](https://github.com/IntersectMBO/cardano-ledger/issues)
- Look at existing `Spec` modules in `cardano-ledger` to understand the testing patterns


## How to Contribute a CIP

A Cardano Improvement Proposal (CIP) is how many core contributions happen — especially changes to ledger rules, protocol parameters, or cryptographic primitives. This is a distinct process, not just a GitHub PR.

**What becomes a CIP vs. a PR:**
- Changes that affect the protocol specification → CIP
- Bug fixes, test additions, or implementation details that don't change the spec → normal PR/issue

**The CIP stages:**

1. **Proposed** — draft submitted to the [CIPs repository](https://github.com/cardano-foundation/CIPs) as a PR
2. **Candidate** — reviewed and accepted by CIP editors, open for community comment
3. **Active** — ratified and incorporated into a hard fork or ecosystem tooling

**Key contacts and venues:**
- CIP editors review submissions in the CIPs repo PRs
- Intersect's Technical Steering Committee (TSC) working groups often discuss CIPs in progress — see [Intersect Working Groups](../../working-group/sessions/q1-2026/07-contributing-intersect/session-notes/readme.md) for how to find and join them
- The `#cip-discussion` channel in the [Cardano Discord](https://discord.gg/cardano) is the informal venue for early feedback

The [CIPs repository `README`](https://github.com/cardano-foundation/CIPs/blob/master/README.md) has the authoritative process document, but it assumes ecosystem familiarity. Reading a few merged CIPs (CIP-1694, CIP-0381) before writing your own will calibrate your expectations on scope and depth.


## Governance Protocol Work (Not DRep Participation)

Governance in Cardano operates at three distinct layers — **don't conflate them**:

| Layer | What it is | Example work |
|---|---|---|
| **Governance participation** | Being a DRep, voting, joining Intersect | Register as a DRep, join a working group |
| **Governance tooling** | Application development on governance infrastructure | GovTool, Agora, wallet integrations for voting |
| **Governance protocol** | Core ledger rules governing governance itself | CIP-1694 implementation in `cardano-ledger`, Conway era ledger rules, DRep pulsing, ratification logic, committee expiry |

The third layer is core protocol work. Someone contributing to the Conway era ledger rules has a completely different profile from someone using GovTool to vote. The Conway era modules in `cardano-ledger` are a good starting point:
- [`Cardano.Ledger.Conway.Rules`](https://github.com/IntersectMBO/cardano-ledger/tree/master/eras/conway/impl/src/Cardano/Ledger/Conway/Rules) — the STS rules for governance
- The Conway formal spec (linked in Formal Specifications above)

For governance **participation and tooling**, see the [Intersect Membership Guide](../../intersect-membership-guide.md).


## Realistic Time Estimates

Be honest with yourself about the investment required. This is a longer path than dApp development.

| Milestone | Realistic timeframe |
|---|---|
| Nix environment working, repo builds locally | 1–3 days |
| Read the relevant formal spec section for your target area | 1–2 weeks |
| Understand the STS rule framework in `cardano-ledger` | 2–4 weeks |
| Navigate the module structure of `cardano-ledger` or `ouroboros-consensus` | 2–4 weeks |
| Write a meaningful test for an existing rule | 1–2 months from starting |
| First non-trivial PR merged to `cardano-ledger` | 6–12 months from starting (from general Haskell competence) |
| First PR to `ouroboros-consensus` | 9–18 months (requires deeper Haskell and academic background) |
| Pallas first PR (Rust path) | 2–6 weeks (most accessible entry point) |
| Amaru first PR (Rust node) | 4–8 weeks — read the formal spec section for your target area first |
| Meaningful Amaru contribution (consensus or ledger rules) | 3–6 months from a Rust systems background |

The review team for core Haskell repositories is small and specialized. Rust projects like Pallas and Amaru tend to have faster review cycles and more contributor-friendly onboarding. Factor this into your expectations.


## Getting Involved with Intersect Working Groups

Core protocol work doesn't require Haskell fluency to participate in early stages. Intersect's working groups directly shape which CIPs get prioritized and which protocol changes get funded.

**Relevant working groups:**
- **Technical Steering Committee (TSC)** — Consensus, DB Sync, Network Evolution, Layer 2
- **Open Source Committee (OSC)** — developer experience, tooling, open-source standards

See [Contributing to Intersect](../../working-group/sessions/q1-2026/07-contributing-intersect/session-notes/readme.md) for how to find and join working groups. Membership is required to access Discord channels — see the [Intersect Membership Guide](../../intersect-membership-guide.md).



## Summary: Five Highest-Impact First Steps

1. **Read the [Cardano Blueprint](https://cardano-scaling.github.io/cardano-blueprint/introduction/index.html)** — the implementation-independent protocol guide; the right starting point for both Haskell and Rust paths
2. **Set up your environment** — Haskell: install Nix and run `nix develop` in a core repo; Rust: clone Pallas and run `cargo build`
3. **Read the formal spec** for your target area — ledger rules: Shelley/Conway spec; consensus: Ouroboros Praos paper
4. **Write a test** for an existing rule — in `cardano-ledger` search for `good first issue` testing labels; in Amaru look for conformance test gaps
5. **Join a TSC working group** — you can contribute to protocol direction before your first PR, regardless of which language path you are on


*For contributing to this repository's documentation, see the [Contributing Guidelines](https://github.com/IntersectMBO/developer-experience/blob/main/CONTRIBUTING.md). For joining Intersect as a member, see the [Intersect Membership Guide](../../intersect-membership-guide.md).*
