# Contributing to Jamar Whitfield Portfolio

Thank you for contributing to this project! This guide will help you set up your environment correctly so your contributions are properly credited.

## Git Configuration

### Why Your Commits May Not Appear in GitHub Contribution History

For your commits to show up in your GitHub contribution history, you must configure Git with an email address that is:

1. **Associated with your GitHub account**
2. **Verified on GitHub**

If you're using a local machine email (like `username@MacBook-Air.local`), your commits **will not** appear in your contribution graph.

### How to Fix Your Git Configuration

#### Step 1: Find Your GitHub Email

You can use your GitHub-provided no-reply email address:
- Format: `[ID]+[username]@users.noreply.github.com`
- Find it at: https://github.com/settings/emails

Or use any verified email from your GitHub account.

#### Step 2: Configure Git for This Repository

```bash
# Set your name
git config user.name "Your Name"

# Set your GitHub email (use one of these options):
# Option A: Your GitHub no-reply email
git config user.email "[ID]+[username]@users.noreply.github.com"

# Option B: Your verified personal email
git config user.email "your.email@example.com"
```

#### Step 3: Configure Git Globally (Optional)

To set this for all repositories on your machine:

```bash
git config --global user.name "Your Name"
git config --global user.email "[ID]+[username]@users.noreply.github.com"
```

#### Step 4: Verify Your Configuration

```bash
# Check local configuration
git config user.name
git config user.email

# Check global configuration
git config --global user.name
git config --global user.email
```

### Fixing Existing Commits

If you've already made commits with the wrong email, you have a few options:

#### Option 1: For Recent Commits (Recommended for Simple Cases)

If you just made a commit with the wrong email:

```bash
# Amend the last commit with correct author
git commit --amend --author="Your Name <your.email@example.com>"
```

#### Option 2: For Multiple Commits (Advanced)

⚠️ **Warning**: This rewrites history and requires force push. Only do this if:
- You're working on a personal branch
- No one else has pulled your commits

```bash
# Use filter-branch to update all commits (replace with your correct email)
git filter-branch --env-filter '
OLD_EMAIL="old@email.local"
CORRECT_NAME="Your Name"
CORRECT_EMAIL="correct@email.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

## Additional Tips

- Always verify your git configuration before starting work on a new machine
- Enable "Block command line pushes that expose my email" in GitHub settings if using no-reply email
- Check your recent commits: `git log --pretty=format:"%an <%ae>"`

## Getting Started with Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Run linter**
   ```bash
   npm run lint
   ```

## Making Changes

1. Create a new branch for your feature or fix
2. Make your changes
3. Test your changes locally
4. Commit with a clear, descriptive message
5. Push your branch and create a pull request

## Questions?

If you have questions about contributing or git configuration, please open an issue in the repository.
