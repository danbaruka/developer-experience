---
title: "Session 10: Wallet Integration Guide"
sidebar_label: Session Notes
sidebar_position: 1
slug: /working-group/q1-2026/sessions/10-wallet-integration/session-notes
---

# Wallet Integration & Developer Experience

This session explores wallet integration patterns for Cardano dApps, covering community feedback on developer experience and practical approaches to connecting wallets in decentralized applications.

**What you'll learn:**
- Community insights on Cardano developer experience challenges
- Three core wallet integration patterns: Payments, Authentication, and Wallet-as-a-Service
- Recommended tools and SDKs for wallet integration

---

## Community Feedback: The State of Developer Experience

The session opened with an open discussion where developers shared their experiences, challenges, and successes building on Cardano.

### Key Insights

| Challenge | Impact | Status |
|-----------|--------|--------|
| **Documentation Fragmentation** | Scattered resources make it difficult to connect concepts from "Hello World" to production | Improving with centralized DevX practices |
| **Learning Preferences** | Strong demand for video tutorials, especially for complex setups like Cardano Nodes | Opportunity for improvement |
| **Contribution Incentives** | Need better reward mechanisms to sustain open-source contributions | Ongoing discussion |
| **Entry Barrier** | The "Zero to One" phase (environment setup) remains the hardest part for new developers | Focus area for improvement |

### Developer Needs

- **Centralized Resources**: Single source of truth for documentation and guides
- **Visual Learning**: Video tutorials complementing written documentation
- **Clear Pathways**: Step-by-step progression from beginner to advanced
- **Better Onboarding**: Simplified environment setup and configuration

---

## Wallet Integration Patterns

There are three primary patterns for integrating wallets into Cardano dApps, each serving different use cases and user needs.

### Pattern 1: Payments & Transactions

The most common integration pattern—enabling users to send and receive ADA or native tokens through your dApp.

**Use Cases:**
- E-commerce and payment processing
- Token transfers and swaps
- Subscription services
- Donation platforms

**Implementation Flow:**

```mermaid
graph LR
    A[User Action] --> B[Build Transaction]
    B --> C[Request Wallet Signature]
    C --> D{User Approves?}
    D -->|Yes| E[Submit to Network]
    D -->|No| F[Cancel]
    E --> G[Verify On-Chain]
    
    style A fill:#e1f5ff
    style E fill:#e8f5e9
    style G fill:#fff4e1
```

**Recommended Tools:**

| Tool | Type | Best For |
|------|------|----------|
| **Mesh SDK** | React Library | Frontend dApps, rapid development |
| **Evolution SDK** | TypeScript Library | Strongly typed, backend integration |
| **Lucid** | TypeScript Library | Full transaction control |

**Verification Options:**

- **Blockfrost API**: Third-party service for easy transaction querying and verification
- **Cardano Node + CLI**: Self-hosted solution for complete sovereignty
- **Cardano Wallet API**: Programmatic wallet management and verification

### Pattern 2: Authentication (CIP-8 / CIP-30)

Using a wallet as a cryptographic login mechanism, replacing traditional email/password authentication.

**How It Works:**

1. User connects wallet to dApp
2. dApp requests message signature
3. User signs message with wallet's private key
4. Backend verifies signature against user's public address
5. Authentication granted based on signature validity

**Use Cases:**
- Tipping platforms and social networks
- Gated content and premium features
- Decentralized identity systems
- Web3 gaming and metaverse platforms

**Advantages:**
- ✅ No password management
- ✅ Cryptographic proof of ownership
- ✅ Cross-platform compatibility
- ✅ Enhanced security

**Standards:**
- **CIP-30**: dApp Connector API for wallet communication
- **CIP-8**: Message Signing standard for authentication

### Pattern 3: Wallet-as-a-Service (WaaS)

Custodial or semi-custodial wallet solutions for applications targeting non-technical users who prefer not to manage seed phrases.

**How It Works:**

Applications manage cryptographic keys securely on behalf of users, providing a seamless experience without requiring users to understand wallet mechanics.

**Trade-offs:**

| Aspect | Traditional Wallets | WaaS |
|--------|-------------------|------|
| **User Control** | Full control of keys | Managed by service |
| **UX Friction** | Higher (seed phrases, backups) | Lower (email-like signup) |
| **Security Model** | User responsibility | Service responsibility |
| **Centralization** | Decentralized | Centralized/Semi-custodial |
| **Cost** | Free | Service fees may apply |

**When to Use:**
- Targeting mainstream, non-crypto users
- Applications requiring simplified onboarding
- Enterprise solutions with compliance needs
- Applications where UX is prioritized over decentralization

---

## Integration Libraries

### Mesh SDK

React-focused library with hooks and components for rapid wallet integration.

**Features:**
- React hooks (`useWallet`, `useWalletList`)
- Pre-built UI components
- CIP-30 and CIP-95 support
- Comprehensive documentation

**Installation:**
```bash
npm install @meshsdk/react @meshsdk/core
```

**Best For:** Frontend dApps, React applications, rapid prototyping

### Evolution SDK

Strongly typed TypeScript library for wallet integration with flexible wallet selection methods.

**Features:**
- Multiple wallet selection methods (CIP-30, private keys, seed phrases)
- Strong TypeScript typing
- Backend and frontend support
- Transaction building utilities

**Installation:**
```bash
npm install @intersectmbo/evolution-sdk
```

**Best For:** TypeScript projects, backend integration, production applications

### Cardano Connect with Wallet

Official Cardano Foundation library providing React hooks and pre-built UI components.

**Features:**
- Official Foundation support
- Pre-built wallet selection UI
- React hooks for wallet state
- Next.js SSR support

**Installation:**
```bash
npm install @cardano-foundation/cardano-connect-with-wallet
```

**Best For:** Official integrations, React applications, quick UI setup

---

## Available Cardano Wallets

### Browser Extension Wallets

| Wallet | Developer | Network Support | CIP-30 |
|--------|-----------|----------------|--------|
| **Nami** | Community | Mainnet, Testnet | ✅ |
| **Eternl** | Community | Mainnet, Testnet | ✅ |
| **Lace** | IOG | Mainnet, Testnet | ✅ |
| **Flint** | Community | Mainnet, Testnet | ✅ |
| **Typhon** | Community | Mainnet, Testnet | ✅ |
| **Yoroi** | Emurgo | Mainnet, Testnet | ✅ |
| **Gero** | Community | Mainnet, Testnet | ✅ |
| **NuFi** | Community | Mainnet, Testnet | ✅ |
| **Vespr** | Community | Mainnet, Testnet | ✅ |
| **Begin** | Community | Mainnet, Testnet | ✅ |

### Full-Node Wallets

- **Daedalus**: Desktop wallet by IOG requiring full blockchain synchronization

---

## Best Practices

### Network Validation

Always verify the wallet is connected to the correct network (mainnet vs testnet) before proceeding with transactions.

```typescript
const networkId = await wallet.getNetworkId();
// 0 = testnet, 1 = mainnet
if (networkId !== expectedNetwork) {
  throw new Error('Please switch to the correct network');
}
```

### Address Validation

Validate address format matches the expected network prefix.

```typescript
const validateAddress = (address: string, network: 'mainnet' | 'testnet') => {
  const prefix = network === 'mainnet' ? 'addr1' : 'addr_test1';
  return address.startsWith(prefix);
};
```

### Error Handling

Implement comprehensive error handling for:
- User rejection of connection requests
- Missing wallet extensions
- Network mismatches
- Transaction failures

### Session Management

Persist connection state to improve user experience:

```typescript
// Save connection state
localStorage.setItem('walletName', walletName);
localStorage.setItem('walletConnected', 'true');

// Restore on page load
const savedWallet = localStorage.getItem('walletName');
if (savedWallet) {
  await connect(savedWallet);
}
```

---

## Resources

### Documentation

- **[Cardano Developer Portal](https://developers.cardano.org/)** - Central hub for Cardano documentation
- **[Mesh SDK Documentation](https://meshjs.dev/)** - Complete guide to Mesh SDK wallet integration
- **[Evolution SDK GitHub](https://github.com/IntersectMBO/evolution-sdk)** - Evolution SDK repository and docs
- **[Cardano Connect with Wallet](https://cardano-foundation.github.io/cardano-connect-with-wallet/)** - Official Foundation library

### Standards

- **[CIP-30 Specification](https://cips.cardano.org/cips/cip30/)** - dApp Connector API standard
- **[CIP-8 Specification](https://cips.cardano.org/cips/cip8/)** - Message Signing standard

### Related Materials

- **[Session Resources](../session-resources/readme.md)** - Tools, libraries, and hands-on examples
- **[Session Recordings](../recordings/readme.md)** - Video recordings of this session

---

*This guide is part of the Q1 2026 Developer Experience Working Group session on Wallet Integration & Developer Experience.*
