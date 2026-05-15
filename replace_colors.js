const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function walk(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      // Hex
      content = content.replace(/#6200ea1a/gi, '#ffc1071a');
      content = content.replace(/#6200ea/gi, '#FFC107');
      content = content.replace(/#7c3aed/gi, '#FFB300');
      
      // RGB
      content = content.replace(/98,\s*0,\s*234/g, '255, 193, 7');
      content = content.replace(/98,0,234/g, '255,193,7');
      
      // Text contrast fixes on buttons
      content = content.replace(/bg-\[#FFC107\] text-white/g, 'bg-[#FFC107] text-black');
      content = content.replace(/text-white(.*?)bg-\[#FFC107\]/g, 'text-black$1bg-[#FFC107]');
      content = content.replace(/hover:bg-\[#FFC107\] hover:text-white/g, 'hover:bg-[#FFC107] hover:text-black');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

walk(dir);
