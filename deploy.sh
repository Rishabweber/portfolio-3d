#!/bin/bash

# Deploy to GitHub Pages Script
# This script builds your portfolio and pushes it to gh-pages branch

echo "🚀 Starting deployment to GitHub Pages..."
echo ""

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Build the project
echo "🔨 Building project..."
npm run build

# Step 3: Deploy using gh-pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site is now available at: https://rishabweber.github.io/portfolio-3d"
echo ""
echo "💡 Note: It may take a few minutes for the site to be live."
