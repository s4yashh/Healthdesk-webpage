#!/bin/bash

# Health Desk Clinic - Quick Start Script
# This script sets up and runs the project

echo "======================================"
echo "Health Desk Clinic - Quick Start"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Navigate to project directory
echo "📁 Setting up project..."
cd "$(dirname "$0")" || exit

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 Starting development server..."
    echo "   Open your browser to: http://localhost:3000"
    echo ""
    npm run dev
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
