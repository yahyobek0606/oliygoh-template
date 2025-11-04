const fs = require('fs');
const path = require('path');

// Helper function to copy directory recursively (compatible with older Node versions)
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper function to remove directory recursively
function removeDir(dir) {
  if (fs.existsSync(dir)) {
    if (fs.rmSync) {
      fs.rmSync(dir, { recursive: true, force: true });
    } else {
      // Fallback for older Node versions
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const entryPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          removeDir(entryPath);
        } else {
          fs.unlinkSync(entryPath);
        }
      }
      fs.rmdirSync(dir);
    }
  }
}

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// Copy directories
const dirsToCopy = ['pages', 'assets', 'dist'];

dirsToCopy.forEach(dir => {
  if (fs.existsSync(dir)) {
    const src = path.join(process.cwd(), dir);
    const dest = path.join(process.cwd(), 'public', dir);
    
    // Remove destination if exists
    removeDir(dest);
    
    // Copy directory
    if (fs.cpSync) {
      fs.cpSync(src, dest, { recursive: true });
    } else {
      copyDir(src, dest);
    }
    console.log(`Copied ${dir} to public/${dir}`);
  }
});

console.log('Public directory prepared successfully!');

