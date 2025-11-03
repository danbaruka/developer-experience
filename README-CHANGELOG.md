# Automated Changelog Setup

This project uses **Conventional Commits** and **semantic-release** for automatic changelog generation.

## 🚀 Quick Start

### Making Commits

Use conventional commit format:

```bash
# Feature (creates minor version bump)
git commit -m "feat: add new navigation menu"

# Bug fix (creates patch version bump)
git commit -m "fix: resolve navbar hover issue"

# Documentation
git commit -m "docs: update installation guide"

# Breaking change (creates major version bump)
git commit -m "feat!: redesign homepage layout"
```

### Using Commitizen (Interactive)

For guided commit creation:

```bash
cd website
npm run commit
```

This will prompt you through:
- Type of change (feat, fix, docs, etc.)
- Scope (optional)
- Short description
- Long description (optional)
- Breaking changes (optional)
- Issues closed (optional)

## 📋 Commit Types

| Type | Description | Version Impact |
|------|-------------|----------------|
| `feat` | New feature | **Minor** (1.0.0 → 1.1.0) |
| `fix` | Bug fix | **Patch** (1.0.0 → 1.0.1) |
| `feat!` or `BREAKING CHANGE` | Breaking change | **Major** (1.0.0 → 2.0.0) |
| `docs` | Documentation only | No version change |
| `style` | Code style (formatting) | No version change |
| `refactor` | Code refactoring | No version change |
| `perf` | Performance improvement | **Patch** |
| `test` | Adding tests | No version change |
| `build` | Build system | No version change |
| `ci` | CI/CD changes | No version change |
| `chore` | Other changes | No version change |

## 🔄 Automatic Release Process

When you push to `main` branch:

1. **semantic-release** analyzes commits since last release
2. Determines version bump (major/minor/patch)
3. Updates `CHANGELOG.md` automatically
4. Bumps version in `package.json`
5. Creates git tag
6. Publishes GitHub release

### Manual Release (if needed)

```bash
cd website
npm run release
```

## 📝 Changelog Format

The changelog is automatically generated and includes:

- **Features**: New functionality
- **Bug Fixes**: Resolved issues
- **Breaking Changes**: Backward incompatible changes
- **Documentation**: Documentation updates
- **Performance**: Performance improvements

## 🛠️ Setup Verification

Verify your setup:

```bash
cd website
npm install

# Test commit message format
echo "feat: test commit" | npx commitlint

# Test Commitizen
npm run commit
```

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [semantic-release](https://github.com/semantic-release/semantic-release)
- [Commitlint](https://commitlint.js.org/)
- [Commitizen](http://commitizen.github.io/cz-cli/)

## ❓ FAQ

**Q: Do I need to manually update CHANGELOG.md?**  
A: No! The changelog is automatically generated from commit messages.

**Q: What if I forget to use conventional commits?**  
A: Commitlint will validate your commit messages. If invalid, the commit will be rejected (when using `npm run commit` or husky hooks).

**Q: Can I still use `git commit -m`?**  
A: Yes, but make sure to follow the conventional commit format, or use `npm run commit` for guided prompts.

**Q: How do I create a breaking change?**  
A: Add `!` after the type: `feat!: redesign API` or include `BREAKING CHANGE:` in the commit body.

**Q: When does the release happen?**  
A: Automatically when you push to `main` branch. The GitHub Actions workflow runs semantic-release.

