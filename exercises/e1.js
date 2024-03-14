/**
 * PROMISE CONSTRUCTOR (Resolve with onFulfilled callback argument )
 * Please, make sure to read the "01 Promise-constructor.md" file in exercise-info folder before you start!
 **/

export const createOneSecondPromise = () => {
  // Return a Promise that resolves to the string 'The PROMISE was RESOLVED' in 1 second
  // make sure to use the promise constructor described in The Markdown For this exercise
  const executor = (resolve, reject) => {
    setTimeout(() => {
      resolve("The PROMISE was RESOLVED");
    }, 1000);
  };
  const promiseName = new Promise(executor);
  return promiseName;
};

export const logMessageAfterOneSecond = (message) => {
  // use the 'createOneSecondPromise' function, and a `onFulfilled` callback with a `.then` method
  // to log the `message` parameter we pass in after one second
  const onFulfilled = (data) => console.log(message);
  createOneSecondPromise().then(onFulfilled);
};

export const logMessageAfterOneSecondAwait = async (message) => {
  // use the 'createOneSecondPromise' function, and the await keyword
  // to create a function that logs a message after one second
  // in an async function it automatically returns a promise no matter what you return, so you don't need to
  // worry about what you return
  const onFulfilled = (data) => console.log(message);
  const logging = await createOneSecondPromise().then(onFulfilled);
  return logging;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
