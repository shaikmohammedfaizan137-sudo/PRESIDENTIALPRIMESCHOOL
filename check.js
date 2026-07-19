const fs = require('fs'); 
const data = JSON.parse(fs.readFileSync('jobs.json')); 
const failedJob = data.jobs.find(j => j.conclusion === 'failure'); 
if(failedJob) { 
  failedJob.steps.forEach(s => { 
    if(s.conclusion === 'failure') console.log('Failed step:', s.name); 
  }); 
}
