document.addEventListener('DOMContentLoaded', () => {
  fetchJobListings();
});

async function fetchJobListings() {
  try {
    const response = await fetch('http://localhost:8000/api/jobs'); // Adjust API endpoint if needed
    const jobs = await response.json();

    const jobListingsContainer = document.getElementById('job-listings');
    jobListingsContainer.innerHTML = '';

    jobs.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.className = 'job-listing';

      jobElement.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="company-name">${job.companyName}</div>
        <div class="job-location">${job.location}</div>
        <div class="job-description">${job.description}</div>
        <button class="apply-button">Apply Now</button>
      `;

      jobListingsContainer.appendChild(jobElement);
    });
  } catch (error) {
    console.error('Error fetching job listings:', error);
  }
}
