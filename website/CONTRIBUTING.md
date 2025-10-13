# Contributing to Cardano Developer Experience

Thank you for your interest in contributing to the Cardano Developer Experience documentation! This repository aims to provide comprehensive, accessible resources for developers and contributors in the Cardano ecosystem.

## Ways to Contribute

### 1. Documentation Improvements
- Fix typos, grammar, or formatting issues
- Update outdated information
- Add new guides or tutorials
- Improve existing explanations
- Translate content to other languages

### 2. Code Examples
- Add practical code examples to guides
- Create new hands-on tutorials
- Update examples for latest versions
- Add comments and explanations to existing code

### 3. Community Resources
- Update community links and channels
- Add new tools and resources
- Share developer stories and experiences
- Contribute to troubleshooting guides

### 4. Testing and Feedback
- Test tutorials and report issues
- Provide feedback on content clarity
- Suggest improvements to structure
- Report broken links or outdated information

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git
- Basic understanding of Markdown

### Local Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/developer-experience.git
   cd developer-experience/website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Local Server**
   ```bash
   npm start
   ```

4. **Make Changes**
   - Edit files in the `docs/` directory
   - Changes are reflected in real-time

### Repository Structure

```
docs/
├── README.md                    # Main documentation index
├── Guides/
│   ├── directive-kickoff.md     # Main onboarding guide
│   ├── Beginner/               # Beginner guides
│   ├── Intermediate/           # Intermediate guides
│   └── Advanced/               # Advanced guides
├── Tutorials/
│   └── Hands-On/               # Interactive tutorials
├── Resources/
│   ├── Repositories/           # Repository guides
│   ├── Tools/                  # Tool documentation
│   └── Community/              # Community resources
└── Working-Group/              # DevEx Working Group materials
```

## Contribution Guidelines

### Content Standards

#### Writing Style
- Use clear, concise language
- Write for your target audience (beginner/intermediate/advanced)
- Include practical examples where possible
- Use active voice
- Explain technical terms

#### Formatting
- Use proper Markdown syntax
- Include code blocks with syntax highlighting
- Use headings to structure content
- Add links to external resources
- Include images/diagrams when helpful

#### Code Examples
- Test all code examples before submitting
- Use the latest stable versions
- Include necessary imports and dependencies
- Add comments explaining complex parts
- Provide complete, runnable examples

### Submission Process

#### For Small Changes
1. Fork the repository
2. Create a feature branch: `git checkout -b fix/update-documentation`
3. Make your changes
4. Test locally: `npm start`
5. Commit with descriptive message: `git commit -m "Fix typo in environment setup guide"`
6. Push to your fork: `git push origin fix/update-documentation`
7. Create a Pull Request

#### For Large Changes
1. **First, create an issue** to discuss the proposed changes
2. Get feedback from maintainers
3. Follow the same process as small changes
4. Reference the issue in your PR description

### Pull Request Guidelines

#### PR Description Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have tested these changes locally
- [ ] I have checked for broken links
- [ ] Code examples have been tested

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have made corresponding changes to documentation
- [ ] My changes generate no new warnings
```

#### Review Process
1. Automated checks will run on your PR
2. Maintainers will review within 48 hours
3. Address any feedback or requested changes
4. Once approved, your PR will be merged

## Content Guidelines

### Documentation Structure
- Start with clear objectives
- Provide prerequisites
- Use step-by-step instructions
- Include troubleshooting sections
- End with next steps or related resources

### Code Examples
- Always use syntax highlighting: \`\`\`language
- Include file paths for real code: \`\`\`javascript path=/path/to/file.js start=10
- Use null values for hypothetical code: \`\`\`javascript path=null start=null
- Test all examples before submission

### Links and References
- Use descriptive link text
- Prefer official sources
- Check links are working before submission
- Use relative links for internal content

## Community Guidelines

### Be Respectful
- Treat all community members with respect
- Be constructive in feedback
- Help newcomers learn and contribute
- Celebrate diverse perspectives and backgrounds

### Be Collaborative
- Discuss major changes before implementing
- Ask for help when needed
- Share knowledge and resources
- Credit contributors appropriately

### Stay Focused
- Keep discussions relevant to the project
- Follow the established structure and patterns
- Maintain consistency with existing content
- Focus on improving developer experience

## Getting Help

### Questions and Support
- **Discord**: First become a member at [Intersect](https://www.intersectmbo.org/) and register at [members.intersectmbo.org](https://members.intersectmbo.org/registration) to get voting rights, participate in governance decisions, and access our Discord community's #developer-experience channel. See our [Intersect Membership Guide](docs/intersect-membership-guide.md) for all benefits
- **Issues**: Create an issue for bug reports or feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas

### Working Group
- Join the Developer Experience Working Group
- Attend weekly sessions for real-time collaboration
- Contribute to session planning and content creation

## Recognition

Contributors are recognized in:
- README.md contributor section
- Session credits for working group contributions
- Community shout-outs in Discord and social media

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for helping make Cardano more accessible to developers worldwide! 🚀

*For questions about contributing, first become a member at [Intersect](https://www.intersectmbo.org/) and register at [members.intersectmbo.org](https://members.intersectmbo.org/registration) to get voting rights and access to our Discord community's #developer-experience channel. See our [Intersect Membership Guide](docs/intersect-membership-guide.md) for all membership benefits.*
