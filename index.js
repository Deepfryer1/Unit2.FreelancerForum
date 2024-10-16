const jobs = [
  { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
  { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
   

];

const names = ['Alice', 'Bob', 'Carol', 'Greg', 'Ben'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Sales', 'Engineer'];
const startingPrices = [30, 50, 70, 80, 60];

const calculateAveragePrice = () => {
  const total = jobs.reduce((sum, job) => sum + job.startingPrice, 0);
  return (total / jobs.length).toFixed(2);
}

function renderJobs() {
  const jobList = document.getElementById('job-list');
  //jobs.innerHTML = '';

  jobs.forEach(job => {
    const listItem = document.createElement('li');
    listItem.textContent = `${job.name} - ${job.occupation} - $${job.startingPrice}`;
    jobList.appendChild(listItem);
});

document.getElementById(`average-price`).textContent=`Average Starting Price: $${calculateAveragePrice()}`;
}

function generateRandomJob() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)];

  return { name: randomName, occupation: randomOccupation, startingPrice: randomPrice };
}

renderJobs();
let count = 0;
if (count === 0 ) {
  setTimeout(() => {
    jobs.pop();
    jobs.pop();
    jobs.push({ name:"Carol", occupation:"programmer", startingPrice: 70});
    renderJobs();
    count += 1;
    return count;

  }, 1000);
}
  setInterval(() => {
    const newJob = generateRandomJob();
    jobs.push(newJob);
    renderJobs();
  }, 2000);



