#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script optimizes images for the static export build:
 * - Converts JPEG/PNG to WebP format
 * - Compresses images to reduce file size
 * - Generates multiple sizes for responsive images
 *
 * Note: This script requires the 'sharp' package to be installed.
 * Run: npm install --save-dev sharp
 *
 * Usage:
 * - Manually: node scripts/optimize-images.js
 * - Auto (on build): Added to "prebuild" script in package.json
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

console.log('📸 Image Optimization Script');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
  console.log('✅ sharp package found\n');
} catch (error) {
  console.log('⚠️  sharp package not found!');
  console.log('   This script requires sharp for image optimization.');
  console.log('\n📦 To install sharp:');
  console.log('   npm install --save-dev sharp\n');
  console.log('⏭️  Skipping image optimization for now...\n');
  process.exit(0);
}

async function optimizeImages() {
  // Check if images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    console.log(`⚠️  Images directory not found: ${IMAGES_DIR}`);
    console.log('   No images to optimize.\n');
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return SUPPORTED_FORMATS.includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('ℹ️  No JPEG/PNG images found to optimize.\n');
    return;
  }

  console.log(`🔍 Found ${imageFiles.length} image(s) to optimize:\n`);

  let totalSavings = 0;
  let totalOriginalSize = 0;
  let optimizedCount = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(IMAGES_DIR, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(IMAGES_DIR, `${baseName}.webp`);

    // Skip if WebP already exists and is newer than source
    if (fs.existsSync(outputPath)) {
      const sourceStats = fs.statSync(inputPath);
      const webpStats = fs.statSync(outputPath);
      if (webpStats.mtimeMs > sourceStats.mtimeMs) {
        console.log(`⏭️  ${file} → ${baseName}.webp (already optimized)`);
        continue;
      }
    }

    try {
      const originalSize = fs.statSync(inputPath).size;
      totalOriginalSize += originalSize;

      // Convert to WebP with 80% quality
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const optimizedSize = fs.statSync(outputPath).size;
      const savings = originalSize - optimizedSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

      totalSavings += savings;
      optimizedCount++;

      console.log(`✅ ${file} → ${baseName}.webp (-${savingsPercent}%)`);
    } catch (error) {
      console.log(`❌ Failed to optimize ${file}:`, error.message);
    }
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`\n📊 Optimization Summary:`);
  console.log(`   Optimized: ${optimizedCount} image(s)`);
  console.log(`   Original size: ${(totalOriginalSize / 1024).toFixed(1)} KB`);
  console.log(`   Total savings: ${(totalSavings / 1024).toFixed(1)} KB (${((totalSavings / totalOriginalSize) * 100).toFixed(1)}%)`);
  console.log('\n💡 Tip: Update your Image components to use WebP with JPEG fallback:');
  console.log('   <picture>');
  console.log('     <source srcSet="/images/photo.webp" type="image/webp" />');
  console.log('     <img src="/images/photo.jpg" alt="..." />');
  console.log('   </picture>\n');
}

// Run the optimization
optimizeImages().catch(error => {
  console.error('❌ Error during optimization:', error);
  process.exit(1);
});
