class Job {
  constructor(start, end, load) {
    this.start = start;
    this.end = end;
    this.load = load;
  }
}

const findMaxCpuLoad = (jobs) => {
  let events = [];
  jobs.forEach((job) => {
    events.push({ time: job.start, load: job.load });
    events.push({ time: job.end, load: -job.load });
  });
  events.sort((a, b) => a.time - b.time);

  let maxLoad = 0;
  let currentLoad = 0;
  events.forEach((event) => {
    currentLoad += event.load;
    maxLoad = Math.max(currentLoad, maxLoad);
  });

  return maxLoad;
};

console.log(
  findMaxCpuLoad([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])
);

console.log(
  findMaxCpuLoad([new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])
);

console.log(
  findMaxCpuLoad([new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])
);
