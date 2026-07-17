# Repository Normalization Guide

This guide explains how to use the normalization script to apply consistent settings across all repositories.

## Overview

The normalization script (`scripts/normalize-repos.js`) applies:
- ✅ Consistent merge settings (auto-merge, squash, rebase)
- 🔒 Commit sign-off requirements
- 🔄 Branch update permissions
- 🎯 Branch protection rules for `main`
- 🤖 CI/CD workflows (ci-bot, security-scanner, deploy-bot)
- ⚙️ Agent configuration files (`.agent-config.json`)

## Prerequisites

1. **GitHub CLI** - Install from https://cli.github.com
2. **Authentication** - Run `gh auth login` to authenticate
3. **Admin Access** - You must have admin access to all target repositories
4. **Node.js** - v14 or higher

## Usage

### Dry Run (Recommended First)
```bash
# Preview what will be changed
node scripts/normalize-repos.js --dry-run
```

### Apply to All Repositories
```bash
# Apply changes to all 10 repositories
node scripts/normalize-repos.js
```

### Apply to Specific Repositories
```bash
# Apply to specific repos
node scripts/normalize-repos.js --repos=IO-OPENUI-AO,AI-IQ-SUPER-PLATFORMA
```

## Settings Applied

### Merge Configuration
- **allow_auto_merge**: `true` - Allows auto-merge of PRs
- **allow_merge_commit**: `true` - Allows merge commits
- **allow_rebase_merge**: `true` - Allows rebase merges
- **allow_squash_merge**: `true` - Allows squash merges
- **allow_update_branch**: `true` - Allows updating branches
- **delete_branch_on_merge**: `true` - Auto-delete merged branches

### Security
- **web_commit_signoff_required**: `true` - Requires signed commits
- All commits must be GPG signed

### Features
- **has_issues**: `true`
- **has_projects**: `true`
- **has_wiki**: `true`
- **has_discussions**: `true`

### Workflow Files Created
Each repository gets:
1. `.github/workflows/ci-bot.yml` - Linting & Testing
2. `.github/workflows/security-scanner.yml` - Security scanning
3. `.github/workflows/deploy-bot.yml` - Production deployment
4. `.agent-config.json` - Agent configuration

## Branch Protection Rules

After normalization, the `main` branch will have:
- ✅ Require at least 1 pull request review before merging
- ✅ Require status checks to pass (ci-bot must succeed)
- ✅ Require branches to be up to date before merging
- ⚠️ Dismiss stale pull request approvals when new commits are pushed

## Post-Normalization Steps

### 1. Configure GitHub Secrets
Each repository needs these secrets configured in **Settings > Secrets and variables > Actions**:

**For CI/Deploy:**
```
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

**For Security:**
```
SNYK_TOKEN
```

### 2. Set Up Git Signing (Local)
```bash
# Generate GPG key (if not already done)
gpg --full-generate-key

# List your keys
gpg --list-secret-keys

# Configure Git to sign commits
git config --global user.signingkey <KEY_ID>
git config --global commit.gpgsign true
```

### 3. Test Workflows
1. Create a feature branch
2. Make a small change
3. Create a PR
4. Verify workflows run successfully
5. Verify all checks pass before merging

### 4. Enable Branch Protection
Once you've verified workflows work:
1. Go to repository **Settings > Branches**
2. Select `main` branch
3. Enable "Require status checks to pass before merging"
4. Enable "Require branches to be up to date before merging"

## Repository-Specific Configurations

### Multi-Repository Platforms
Some repositories (like AI-IQ-SUPER-PLATFORMA) are linked platforms and use `.agent-config.json` to sync status:

```json
{
  "rules": {
    "multi-repo-sync": true,
    "linked-repos": [
      "spaja86/IO-OPENUI-AO",
      "spaja86/Kompanija-SPAJA"
    ]
  }
}
```

This ensures deployment status and security checks are synchronized across linked repos.

## Troubleshooting

### "GitHub CLI not found"
```bash
# Install GitHub CLI
brew install gh  # macOS
# or follow https://cli.github.com
```

### "Not authorized"
```bash
# Re-authenticate
gh auth logout
gh auth login
```

### Workflows not running
1. Check if `.github/workflows/` directory was created
2. Verify YAML syntax is correct
3. Check repository Actions settings are enabled
4. Review Actions logs in GitHub UI

## Rollback

If you need to revert settings:
```bash
# Manually reset via GitHub UI:
# Settings > Options > Merge button options > disable/enable as needed
```

Or use GitHub CLI:
```bash
gh repo edit owner/repo --allow-merge-commit --allow-rebase-merge
```

## Support

For issues or questions:
1. Check the agent logs in GitHub Actions
2. Review the workflow YAML files
3. Contact: team@spaja86.dev
