# GitHub Configuration

This directory contains GitHub-specific configuration files and automation for the IO-OPENUI-AO project.

## 📁 Directory Structure

```
.github/
├── workflows/          # GitHub Actions workflows
│   └── deploy.yml      # Automated Vercel deployment
├── ISSUE_TEMPLATE/     # Issue templates
│   ├── bug_report.md   # Bug report template
│   └── feature_request.md  # Feature request template
├── pull_request_template.md  # PR guidelines
└── README.md           # This file
```

## 🚀 Workflows

### Deploy to Vercel
- **File**: `workflows/deploy.yml`
- **Trigger**: Automatic on push to `main` branch
- **Purpose**: Builds the project and deploys to Vercel
- **Requirements**:
  - `VERCEL_TOKEN` - Vercel authentication token
  - `VERCEL_ORG_ID` - Vercel organization ID
  - `VERCEL_PROJECT_ID` - Vercel project ID

**Setup Instructions**:
1. Go to `Settings → Secrets and variables → Actions`
2. Add the three required secrets with values from Vercel dashboard
3. Workflow will run automatically on next push to main

## 📋 Issue Templates

Users can choose from predefined templates when creating issues:

- **Bug Report** (`bug_report.md`) - For reporting bugs and issues
- **Feature Request** (`feature_request.md`) - For requesting new features

## 📝 Pull Request Template

All pull requests should follow the template defined in `pull_request_template.md`. This ensures:
- Clear description of changes
- Proper categorization of change type
- Testing documentation
- Compliance with contribution guidelines

## 📚 Related Documentation

- [CONTRIBUTING.md](../CONTRIBUTING.md) - How to contribute to the project
- [SETUP.md](../SETUP.md) - Project setup instructions
- [DEPLOYMENT.md](../DEPLOYMENT.md) - Deployment guide
- [SECURITY.md](../SECURITY.md) - Security policy

## 🔧 Configuration Files

- `.vercelignore` - Files to ignore during Vercel deployment
- `vercel.json` - Vercel project configuration
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `package.json` - Node.js dependencies and scripts

---

*Last updated: 2026-03-21*