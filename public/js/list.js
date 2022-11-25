let item = localStorage.getItem("boards");
if (item === null) {
  const initialState = [];
  const state = JSON.stringify(initialState);
  localStorage.setItem("boards", state);
  item = state;
}

item = localStorage.getItem("boards");

const tbody = document.querySelector("tbody");

function template(item, index) {
  return `
    <tr>
        <td>${index + 1}</td>
        <td><a href='../board/view.html?index=${index}'>${item.subject}</a></td>
        <td>${item.writer}</td>
        <td>${item.date}</td>
        <td>${item.hit}</td>
    </tr>
    `
}


const boards = JSON.parse(item);
const paging = document.querySelector("#paging")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

const Idx = location.search.split('=')
const pageIndex = Number(Idx[1])

let lastPage = 0
if (boards.length%10 == 0) {
  lastPage = parseInt(boards.length/10)
} else if (boards.length%10 != 0) {
  lastPage = parseInt(boards.length/10+1)
}

function pageTemplate () {
  let pageArr = []
  for (i=0; i<lastPage; i++) {
    pageArr.push(`<a href="../board/list.html?index=${i}" class="pageMove">${i+1}</a>`)
  } return pageArr
}
paging.innerHTML += pageTemplate()



function prevHandler(e) {
  if (pageIndex > 0) {
    location.href = "../board/list.html?index=" + (pageIndex - 1)
  } else return alert("최신 페이지입니다.")
}

function nextHandler(e) {
  if (pageIndex < lastPage - 1) {
    location.href = "../board/list.html?index=" + (pageIndex + 1)
  } else return alert("마지막 페이지입니다.")
}

prev.addEventListener ("click", prevHandler)
next.addEventListener ("click", nextHandler)


if (pageIndex == 0) {
  for (let i = boards.length - 1; i > boards.length-11; i--) {
      tbody.innerHTML += template(boards[i], i);
  }
}
  
if (pageIndex == 1) {
  for (let i = boards.length - 11; i > boards.length-21; i--) {
      tbody.innerHTML += template(boards[i], i);
  }
}

if (pageIndex == 2) {

  for (let i = boards.length - 21; i >= 0; i--) {
      tbody.innerHTML += template(boards[i], i);
  }
}

