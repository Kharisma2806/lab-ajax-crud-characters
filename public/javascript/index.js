const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
document.getElementById('fetch-all').addEventListener('click',async function (event) {
    console.log("fetch all clicked");
    const response = await charactersAPI.getFullList("characters");
    const allCharacters = {
      characters: response,
    };
    console.log("Here are the characters", allCharacters);
   });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
  console.log("fetch one character");
  const inputId = document.querySelector('#one-char').value;
  const oneChar = await charactersAPI.getOneRegister(inputId);
  console.log("Here is one character", oneChar);
});


  document.getElementById('delete-one').addEventListener('click', async function (event) {
  console.log("delete a char");
  const removeId = document.querySelector('#removechar').value;
  const removeOne = await charactersAPI.deleteOneRegister(removeId);
  console.log("Delete one character", removeOne);
  });


  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
console.log("Edit character clicked");
    const editId = document.querySelector("#new-char-id").value;
    const editName = document.querySelector("#edit-character-form input[name='name']").value;
    const editOccupation = document.querySelector("#edit-character-form input[name='occupation']").value;
    const editWeapon = document.querySelector("#edit-character-form input[name='weapon']").value;
    const editCartoon = document.querySelector("#edit-character-form input[name='cartoon']").checked;
    const editChar = await charactersAPI.updateOneRegister(editId, editName, editOccupation, editWeapon, editCartoon);
    console.log("character successfully Edited", editChar);
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    console.log("new form clicked");
    const newid = document.querySelector("#new-char-id").value;
    const name = document.querySelector("#new-char-name").value;
    const occupation = document.querySelector("#new-char-occupation").value;
    const weapon = document.querySelector("#new-char-weapon").value;
    const newcartoon = document.querySelector("#new-char-cartoon").checked;

    const charToEnroll = { newid, name, occupation, weapon ,newcartoon};
    const newChar = await charactersAPI.createOneRegister(
      "characters",
      "name",
      "weapon",
      charToEnroll,
    );
    console.log("character successfully added", newChar);
  });
})
