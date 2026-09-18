const fs = require('fs');
const path = require('path');

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function (file) {
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

walk('./src', function (err, results) {
  if (err) throw err;
  results
    .filter((f) => f.endsWith('.jsx') || f.endsWith('.js'))
    .forEach((file) => {
      let content = fs.readFileSync(file, 'utf8');
      let newContent = content
        .replace(/\bml-(\w+)\b/g, 'ms-$1')
        .replace(/\bmr-(\w+)\b/g, 'me-$1')
        .replace(/\bpl-(\w+)\b/g, 'ps-$1')
        .replace(/\bpr-(\w+)\b/g, 'pe-$1')
        .replace(/\btext-left\b/g, 'text-start')
        .replace(/\btext-right\b/g, 'text-end')
        .replace(/\bfloat-left\b/g, 'float-start')
        .replace(/\bfloat-right\b/g, 'float-end')
        .replace(/\bborder-left\b/g, 'border-start')
        .replace(/\bborder-right\b/g, 'border-end')
        .replace(/\bdata-toggle=/g, 'data-bs-toggle=')
        .replace(/\bdata-target=/g, 'data-bs-target=')
        .replace(/\bdata-dismiss=/g, 'data-bs-dismiss=');
      if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        console.log('Updated: ' + file);
      }
    });
});
