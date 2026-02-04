#!/bin/bash

# Git Configuration Checker
# Run this script to verify your git configuration is set up correctly
# for GitHub contribution tracking

echo "=========================================="
echo "Git Configuration Checker"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed!"
    exit 1
fi

echo "✓ Git is installed"
echo ""

# Check local configuration
echo "📍 Local Repository Configuration:"
echo "-------------------------------------------"
LOCAL_NAME=$(git config user.name 2>/dev/null)
LOCAL_EMAIL=$(git config user.email 2>/dev/null)

if [ -z "$LOCAL_NAME" ]; then
    echo "❌ Local user.name is NOT set"
else
    echo "✓ Name: $LOCAL_NAME"
fi

if [ -z "$LOCAL_EMAIL" ]; then
    echo "❌ Local user.email is NOT set"
else
    echo "✓ Email: $LOCAL_EMAIL"
    
    # Check if email looks valid
    if [[ "$LOCAL_EMAIL" == *".local" ]] || [[ "$LOCAL_EMAIL" != *"@"* ]]; then
        echo "⚠️  WARNING: This email looks like a local machine address!"
        echo "   It should be a GitHub-verified email address."
        echo "   Your commits may NOT appear in contribution history."
    elif [[ "$LOCAL_EMAIL" == *"@users.noreply.github.com" ]]; then
        echo "✓ Using GitHub no-reply email - Good!"
    else
        echo "ℹ️  Make sure this email is verified on GitHub"
    fi
fi

echo ""

# Check global configuration
echo "🌍 Global Git Configuration:"
echo "-------------------------------------------"
GLOBAL_NAME=$(git config --global user.name 2>/dev/null)
GLOBAL_EMAIL=$(git config --global user.email 2>/dev/null)

if [ -z "$GLOBAL_NAME" ]; then
    echo "⚠️  Global user.name is NOT set"
else
    echo "✓ Name: $GLOBAL_NAME"
fi

if [ -z "$GLOBAL_EMAIL" ]; then
    echo "⚠️  Global user.email is NOT set"
else
    echo "✓ Email: $GLOBAL_EMAIL"
    
    # Check if email looks valid
    if [[ "$GLOBAL_EMAIL" == *".local" ]] || [[ "$GLOBAL_EMAIL" != *"@"* ]]; then
        echo "⚠️  WARNING: This email looks like a local machine address!"
        echo "   It should be a GitHub-verified email address."
    fi
fi

echo ""

# Check recent commits
echo "📝 Recent Commits:"
echo "-------------------------------------------"
git log --pretty=format:"%h | %an | %ae | %s" -5 2>/dev/null

echo ""
echo ""

# Provide recommendations
echo "💡 Recommendations:"
echo "-------------------------------------------"

if [ -z "$LOCAL_EMAIL" ] && [ -z "$GLOBAL_EMAIL" ]; then
    echo "❌ You MUST configure your git email!"
    echo ""
    echo "Run one of these commands:"
    echo "  git config user.email \"your-email@example.com\"  (for this repo only)"
    echo "  git config --global user.email \"your-email@example.com\"  (for all repos)"
    echo ""
    echo "Use an email that is verified on GitHub!"
    echo "Find your GitHub emails at: https://github.com/settings/emails"
elif [[ "$LOCAL_EMAIL" == *".local" ]] || [[ "$GLOBAL_EMAIL" == *".local" ]]; then
    echo "❌ Your email is set to a local machine address!"
    echo ""
    echo "This will NOT show up in GitHub contribution history."
    echo "Update it to a GitHub-verified email:"
    echo ""
    echo "  git config user.email \"your-email@example.com\""
    echo ""
    echo "Find your GitHub emails at: https://github.com/settings/emails"
else
    echo "✓ Configuration looks good!"
    echo ""
    echo "Just make sure your email is verified on GitHub:"
    echo "  https://github.com/settings/emails"
fi

echo ""
echo "For more help, see CONTRIBUTING.md"
echo "=========================================="
