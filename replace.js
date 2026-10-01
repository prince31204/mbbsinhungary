const fs = require('fs');
const path = require('path');

function replaceInString(str) {
    let newStr = str.replace(/Armenia/g, 'Armenia');
    newStr = newStr.replace(/armenia/g, 'armenia');
    newStr = newStr.replace(/ARMENIA/g, 'ARMENIA');
    return newStr;
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(file));
                // Rename directory if needed after walking inside
                const basename = path.basename(file);
                if (basename.includes('armenia') || basename.includes('Armenia')) {
                    const newBasename = replaceInString(basename);
                    const newPath = path.join(path.dirname(file), newBasename);
                    fs.renameSync(file, newPath);
                }
            }
        } else {
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git') && !file.includes('package-lock.json')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(process.cwd());

for (const file of files) {
    try {
        const content = fs.readFileSync(file, 'utf8');
        const newContent = replaceInString(content);
        if (content !== newContent) {
            fs.writeFileSync(file, newContent, 'utf8');
            console.log('Updated content in:', file);
        }
        
        const basename = path.basename(file);
        if (basename.includes('armenia') || basename.includes('Armenia')) {
            const newBasename = replaceInString(basename);
            const newPath = path.join(path.dirname(file), newBasename);
            fs.renameSync(file, newPath);
            console.log('Renamed file:', file, '->', newPath);
        }
    } catch (e) {
        // Might be a binary file, ignore
    }
}

console.log('Done replacing Armenia with Armenia.');
