// Quick script to update all /auth/signup links to signup.html
const fs = require('fs');

const files = ['about.html', 'how-it-works.html', 'pricing.html', 'resources.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace all instances of /auth/signup with signup.html
    content = content.replace(/href="\/auth\/signup"/g, 'href="signup.html"');
    
    // Replace all instances of /dashboard with dashboard-demo.html
    content = content.replace(/href="\/dashboard"/g, 'href="dashboard-demo.html"');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
});

console.log('All files updated successfully!');