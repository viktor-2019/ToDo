let data = [
    'Awake',
    'To do my homework',
    'To watch Yourtube',
    'To learn JS',
  ];

  handlerTriggerButton = event => {
    let offOn = event.currentTarget.querySelector('.button');
    offOn.hidden = !offOn.hidden;
  }

handleDeletePanel = event => {
  let target = event.target;
  let del = target.closest('.panel').innerText;
  let deleted = del.replace('[X]\n', '');
  // let deletedItem = deleted.slice(3);
  let deletedItem = del.slice(6).trim();
  console.log(del + ' ' + deletedItem);
  //  It seems to me I will do this "if" as idiot :(
  //  It works either in "Chrom" or in "Safari"
  // if (navigator.userAgent.includes('Safari') &&
  //     !navigator.userAgent.includes('Mobile')) {
  //   deletedItem = del.slice(6);
  // };
  data = data.filter(el => el !== deletedItem);
  target.closest('.panel').hidden = true;
  list.innerHTML = '';
  makeList(data);
}

handleAddItem = event => {
  let inputItem = document.querySelector('#task').value;
  if (!inputItem) return;
  data.push(inputItem);
  list.innerHTML = '';
  makeList(data);
  document.querySelector('#task').value = '';
}

let list = document.getElementById('list');
let btnAdd = document.querySelector('.btnAdd');
btnAdd.addEventListener('click', handleAddItem);

function makeList(arr) {
  let j = 0;
  for (let i of arr) {
    j++;
    let pane = document.createElement("div");
    pane.classList.add("panel");
    pane.innerHTML = `<b>${j}. ${i}</b>`;
    let btn = document.createElement("div");
    btn.classList.add("button");
    btn.innerHTML = `[X]`;
    btn.setAttribute("hidden", true);
    btn.addEventListener("click", handleDeletePanel);
    pane.prepend(btn);
    pane.addEventListener(
      "mouseenter",
      handlerTriggerButton
    );
    pane.addEventListener(
      "mouseleave",
      handlerTriggerButton
    );
    list.append(pane);
  }
}
makeList(data);
