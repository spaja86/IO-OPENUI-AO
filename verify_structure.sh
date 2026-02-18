#!/bin/bash
# Verification script for Vercel deployment structure

echo "🔍 Verifying deployment structure..."
echo ""

# Check public directory
echo "✓ Checking public/ directory..."
if [ -d "public" ]; then
    echo "  ✅ public/ exists"
    if [ -f "public/index.html" ]; then
        echo "  ✅ public/index.html exists"
    else
        echo "  ❌ public/index.html missing!"
        exit 1
    fi
    if [ -f "public/main.js" ]; then
        echo "  ✅ public/main.js exists"
    else
        echo "  ❌ public/main.js missing!"
        exit 1
    fi
else
    echo "  ❌ public/ directory missing!"
    exit 1
fi

echo ""

# Check api directory
echo "✓ Checking api/ directory..."
if [ -d "api" ]; then
    echo "  ✅ api/ exists"
    if [ -f "api/realtime.js" ]; then
        echo "  ✅ api/realtime.js exists"
    else
        echo "  ❌ api/realtime.js missing!"
        exit 1
    fi
    if [ -f "api/chat.js" ]; then
        echo "  ✅ api/chat.js exists"
    else
        echo "  ❌ api/chat.js missing!"
        exit 1
    fi
else
    echo "  ❌ api/ directory missing!"
    exit 1
fi

echo ""

# Check vercel.json
echo "✓ Checking vercel.json..."
if [ -f "vercel.json" ]; then
    echo "  ✅ vercel.json exists"
else
    echo "  ❌ vercel.json missing!"
    exit 1
fi

echo ""

# Check package.json
echo "✓ Checking package.json..."
if [ -f "package.json" ]; then
    echo "  ✅ package.json exists"
else
    echo "  ❌ package.json missing!"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ All checks passed!"
echo "✅ Structure is correct for Vercel deployment"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Next steps:"
echo "1. Deploy to Vercel: vercel deploy"
echo "2. Or test locally: vercel dev"
echo ""
