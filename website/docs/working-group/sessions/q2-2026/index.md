---
title: "Developer Experience Working Group (Q2: Apr–Jun 2026)"
---

# Developer Experience Working Group (Q2: Apr–Jun 2026)

## Purpose & Why

The Developer Experience (DevEx) Working Group continues to support and empower developers and contributors in the Cardano ecosystem. For Q2 (Apr–Jun 2026), our focus shifts towards application development, utilizing APIs and SDKs, and understanding advanced development architectures.

## Session Plan (Sessions 14+)

| Session | Title | Focus | Format |
|---------|-------|-------|--------|
| **14** | **Repository Walkthrough: Offchain and SDK building** | Deep dive into offchain architecture | Workshop |
| **15** | **dApp Architecture: From Wallet to Backend** | Modular breakdown of full-stack dApp flow | Workshop |
| **16** | **UI ↔ Smart Contracts: Wallets, Tx Building, and Submission** | End-to-end dApp interaction patterns + architecture trade-offs | Workshop |
| **17** | **Default Developer Environment for Cardano** | Working-group debate on what we recommend by default to new builders | Discussion |

## Session Details

### Session 14: Repository Walkthrough: Offchain and SDK building
- **Objective**: Provide architectural clarity on building offchain code and using SDKs
- **Key Topics**:
  - Production smart contract offchain repository walkthrough
  - Building your first offchain application logic
  - Connecting SDKs to the blockchain for transaction building
- **Deliverable**: Smart Contract Offchain Overview

### Session 15: dApp Architecture: From Wallet to Backend
- **Objective**: Explain the 4-layer architecture for Cardano dApps
- **Key Topics**:
  - Frontend, Wallet, Backend, and Blockchain responsibilities
  - Failure handling in distributed systems
  - Polling vs. Webhooks for payment verification
- **Deliverable**: [dApp Architecture Session Notes](./15-dapp-architecture-demo/session-notes/readme.md)

### Session 16: UI ↔ Smart Contracts: Wallets, Tx Building, and Submission
- **Objective**: Teach the *practical* ways a UI app interacts with Cardano validators (Aiken/Plutus) using modern wallet + SDK flows, with clear trade-offs and diagrams.
- **Key Topics**:
  - CIP-30 wallet connector fundamentals (connect, UTxOs, sign, submit)
  - Transaction lifecycle (build → evaluate → sign → submit → confirm)
  - 2–3 recommended architectures (client-only vs hybrid vs server-custody)
  - Indexers and data providers (Kupo/Ogmios, Blockfrost/Koios/Maestro)
- **Deliverable**: Best-practice integration guide + diagrams

### Session 17: Default Developer Environment for Cardano
- **Objective**: Agree on a default developer environment to recommend to newcomers, and the graduation path from "first ten minutes" to mainnet.
- **Key Topics**:
  - Local devnets (Yaci DevKit, cardano-node devnet) vs public testnets (Preview / PreProd)
  - Hosted providers (Blockfrost / Maestro / Koios) vs self-hosted nodes (cardano-node + Ogmios + Kupo)
  - One-click / Dockerized / Codespaces-style sandboxes
  - Recommended flow debate: what is the *single* environment we point new builders at?
- **Deliverable**: [Default Developer Environment Session Notes](./17-default-developer-environment/session-notes/readme.md)

## Working Group Information
For operational details, roles, repository structure, and participation guidelines, please see the [Working Group Overview](../../readme.md).

---
_This plan is a living document and will be updated based on participant feedback and community needs._
