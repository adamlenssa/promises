const allCharacters = [
  { id: 1, name: "billy" },
  { id: 2, name: "mandy" },
  { id: 3, name: "grim" },
];
//! ⬆  ⬆  ⬆  ⬆ do not edit this array   ⬆  ⬆  ⬆  ⬆ ️

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Function ⬇ ⬇ ⬇ ⬇
const fetchCharacterById = (id) => {
  // This function simulates an API, although most api's will return
  // simple data like this quickly, we want you to practice concurrent programming
  // so we're forcing each call to take one second

  const validIds = allCharacters.map((character) => character.id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validIds.includes(id))
        reject(`we do not have a character with the id of ${id}`);

      return resolve(allCharacters.find((character) => character.id === id));
    }, 1000);
  });
};
//! ⬆  ⬆  ⬆  ⬆ do not edit this function   ⬆  ⬆  ⬆  ⬆ ️

const fetchAllCharactersByIds = async (ids) => {
  // To solve this you must fetch all characters passed in the array at the same time
  // use the `fetchCharacterById` function above to make this work
  //*  write code to pass test ⬇ ️
  let arr = [];
  const final = [];
  //    function (...ids) {
  //       arr.push(await fetchCharacterById());
  //    }
  //   arr.push(await fetchCharacterById());
  //   //  billy.then((object) => arr.push(object)).then(() => arr);
  //   console.log(arr);
  //   return arr;
  for (const id of ids) {
    arr.push(fetchCharacterById(id));
  }
  Promise.allSettled(arr)
    .then((results) =>
      results.forEach((result) => {
        result.status == "fulfilled" ? final.push(result.value) : 0;
      })
    )
    .then(() => console.log(final))
    .catch((err) => console.log([]));
  console.log(arr);
};
fetchAllCharactersByIds([1, 2, 3, 4]);
