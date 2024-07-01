let counter = document.getElementById("counter");
let saveList = document.getElementById("saveList");
let count = 0;

function increment() {
  count++;
  counter.innerText = count;
  console.log("Increased Counter");
}

function save() {
  let savedCount = count;

  let dateTime = new Date();

  let hours = dateTime.getHours().toLocaleString();
  let minutes = dateTime.getMinutes().toLocaleString();
  let seconds = dateTime.getSeconds().toLocaleString();
  let savedTime = hours + ":" + minutes + ":" + seconds;

  let year = dateTime.getFullYear();
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate().toLocaleString();
  let savedDate = month.toLocaleString() + "/" + day + "/" + year;

  let saveEntry = `${savedCount} | ${savedTime} | ${savedDate}`;

  if (saveList.innerText === "Nothing Saved") {
    saveList.innerText = saveEntry;
  } else {
    saveList.innerHTML += `<br>${saveEntry}`;
  }

  console.log(saveEntry);
}

function reset() {
  counter.innerText = 0;
  count = 0;
}
