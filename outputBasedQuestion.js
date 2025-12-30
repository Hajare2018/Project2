console.log("start");

setTimeout(() => console.log("timeout"), 100);

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async1();

Promise.resolve().then(() => console.log("promise"));

console.log("end");

///////////////////////////////////////////////////////////////////////////////////

const p1 = Promise.resolve('p1_value');
const p2 = new Promise(resolve => setTimeout(() => resolve('p2_value'), 100));
const p3 = Promise.resolve('p3_value');

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(console.error);

Promise.allSettled([p1, p2, p3])
  .then(console.log)
  .catch(console.error);

///////////////////////////////////////////////////////////////////////////////////

useEffect(() => {
  console.log("output")
});

useEffect(() => {
  console.log("output2")
}, []);

///////////////////////////////////////////////////////////////////////////////////
