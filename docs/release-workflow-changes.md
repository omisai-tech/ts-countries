# Release Workflow Changes Summary

## ✅ What Changed

### Before (Tag-based trigger)
```yaml
on:
  push:
    tags:
      - 'v*'
```

**Process:**
1. Developer creates tag locally: `git tag v1.0.0`
2. Push tag: `git push origin v1.0.0`
3. Workflow triggers automatically
4. Release published

❌ **Problems:**
- No version bump in package.json before tagging
- Manual tag creation required
- Can't easily mark as pre-release
- Less control over release timing

---

### After (Manual workflow_dispatch)
```yaml
on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Version to release (e.g., 1.0.0)'
        required: true
        type: string
      prerelease:
        description: 'Mark as pre-release'
        required: false
        type: boolean
        default: false
```

**Process:**
1. Go to GitHub Actions → Release workflow
2. Click "Run workflow"
3. Enter version: `1.0.0`
4. Check pre-release if needed
5. Click "Run workflow" button

✅ **Benefits:**
- Fully automated version management
- Workflow updates package.json automatically
- Creates and pushes tag automatically
- Easy pre-release marking
- Full control via UI
- No local git operations needed
- Can trigger from anywhere

---

## 🔄 Workflow Steps

### 1. Build and Test Job
```
1. Checkout code
2. Update package.json version ← NEW!
3. Setup Node.js
4. Install dependencies
5. Run compiler
6. Type check
7. Run tests
8. Build package
9. Commit version bump ← NEW!
10. Create and push tag ← NEW!
11. Upload artifacts
```

### 2. Publish to NPM
```
- Downloads artifacts
- Publishes to NPM
```

### 3. Publish to JSR
```
- Pulls latest changes (with version bump) ← NEW!
- Updates jsr.json version ← NEW!
- Runs compiler
- Publishes to JSR
```

### 4. Create GitHub Release
```
- Generates changelog
- Creates release with correct tag ← UPDATED!
- Marks as pre-release if requested ← NEW!
```

### 5. Announce
```
- Posts release links
```

---

## 📋 Key Changes in Detail

### Version Management
**Before:** Manual
```bash
npm version 1.0.0
git push
git tag v1.0.0
git push origin v1.0.0
```

**After:** Automatic
```yaml
- name: Update package.json version
  run: npm version ${{ github.event.inputs.version }} --no-git-tag-version
```

### Tag Creation
**Before:** Manual local git operations
```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

**After:** Automatic in workflow
```yaml
- name: Create and push tag
  run: |
    git tag -a "v${{ version }}" -m "Release v${{ version }}"
    git push origin main
    git push origin "v${{ version }}"
```

### Pre-release Support
**Before:** Not available (tag-based couldn't distinguish)

**After:** Input parameter
```yaml
prerelease: ${{ github.event.inputs.prerelease }}
```

### JSR Version Sync
**Before:** Static version in jsr.json

**After:** Dynamic update from input
```yaml
- name: Update jsr.json version
  run: |
    cat > jsr.json << EOF
    {
      "version": "${{ github.event.inputs.version }}",
      ...
    }
    EOF
```

---

## 🎯 Usage Examples

### Stable Release
**GitHub UI:**
1. Actions → Release
2. Run workflow
3. Version: `1.0.0`
4. Pre-release: ☐ (unchecked)
5. Run!

**GitHub CLI:**
```bash
gh workflow run release.yml -f version=1.0.0 -f prerelease=false
```

### Pre-release
**GitHub UI:**
1. Actions → Release
2. Run workflow
3. Version: `1.0.0-beta.1`
4. Pre-release: ☑ (checked)
5. Run!

**GitHub CLI:**
```bash
gh workflow run release.yml -f version=1.0.0-beta.1 -f prerelease=true
```

---

## 📦 What Gets Created

After running the workflow:

1. **Git Commit** on main branch
   - `chore: bump version to 1.0.0`
   - Updates: `package.json`, `package-lock.json`

2. **Git Tag**
   - Name: `v1.0.0`
   - Message: `Release v1.0.0`
   - Pushed to remote

3. **NPM Package**
   - Published: `@omisai/countries@1.0.0`
   - URL: https://www.npmjs.com/package/@omisai/countries

4. **JSR Package**
   - Published: `@omisai/countries@1.0.0`
   - URL: https://jsr.io/@omisai/countries

5. **GitHub Release**
   - Title: `Release v1.0.0`
   - Tag: `v1.0.0`
   - Assets: Build artifacts
   - Body: Auto-generated changelog

---

## 🔒 Required Secrets

Both workflows require these secrets:

| Secret | Description | Where to get |
|--------|-------------|--------------|
| `NPM_TOKEN` | NPM publish token | npmjs.com → Settings → Access Tokens |
| `DENO_DEPLOY_TOKEN` | JSR publish token | jsr.io → Settings → Access Tokens |
| `GITHUB_TOKEN` | Auto-provided | Automatically available |

---

## ✨ Benefits Summary

✅ **No local git operations needed**
✅ **Fully automated version management**
✅ **One-click releases from GitHub UI**
✅ **Pre-release support built-in**
✅ **Consistent versioning across package.json, JSR, and tags**
✅ **Automatic changelog generation**
✅ **Can release from anywhere (not just local machine)**
✅ **Rollback friendly (just run workflow again with new version)**
✅ **Team-friendly (anyone with repo access can release)**

---

## 📚 Documentation

- **Detailed guide:** [RELEASE.md](./RELEASE.md)
- **Contributing:** [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Changelog:** [CHANGELOG.md](./CHANGELOG.md)
- **Main README:** [README.md](./README.md)

---

**Release Process: Simplified and Automated! 🚀**
