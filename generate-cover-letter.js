#!/usr/bin/env node
const fs = require('fs');
const {exec} = require("child_process");

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data)
    });
  })
}

function write(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, function (err) {
      if (err) return reject(err);
      resolve()
    });
  })
}

function execAsync(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      if (stderr) {
        return reject(error);
      }
      return resolve(stdout)
    });
  })
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

(async () => {

  // const companyName = "Cloud Clearwater";
  // const positionName = "Software Developer";
  // const coverLetterHtml = "./coverletter.html"

  if (process.argv.length === 2) {
    return console.log(`
      Example Usage : 
      
      example doc: 
      
      https://docs.google.com/document/d/1DTghAorT0H_Iou87XUigRh0-s4kMKmP17Rc06iEBXnI/edit?usp=sharing
      
      generate-cover-letter $html_path $company_name $role_name
      
      generate-cover-letter coverletter.html "Your Organization" "Software Developer"
      
    `)
  }

  const coverLetterHtml = process.argv[2]
  const companyName = process.argv[3]
  const positionName = process.argv[4]

  console.log("coverLetterHtml", coverLetterHtml)
  console.log("companyName", companyName)
  console.log("positionName", positionName)


  let s = await readFile(coverLetterHtml);

  s = replaceAll(s, "{COMPANY_NAME}", companyName)
  s = replaceAll(s, "{POSITION_NAME}", positionName)

  await write("/tmp/hehe.html", s)

  // const cmd = `wkhtmltopdf -L 35 /tmp/hehe.html output.pdf`
  const cmd = `wkhtmltopdf /tmp/hehe.html celal-ertug-cover-letter-for-${companyName.replace(/\s/g,'')}.pdf`

  try {
    await execAsync(cmd)

  } catch (err) {
    console.log(err);
  }

})()
