// The perf_hooks module in Node.js provides a set of performance monitoring and analysis tools that allow you to measure the performance of your application. It offers a high-resolution timer and performance entry tracking, enabling you to gather detailed metrics about various aspects of your code execution

const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0]);
  obs.disconnect();
});

obs.observe({ entryTypes: ['measure'] });

performance.mark('start');
// Your code...
for (let i = 0; i < 1e6; i++) {}
performance.mark('end');

performance.measure('loop-duration', 'start', 'end');

// output

// PerformanceMeasure {
//   name: 'loop-duration',
//   entryType: 'measure',
//   startTime: 29.80047,
//   duration: 3.0776999999999965,
//   detail: null
// }
