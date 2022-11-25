const item = window.localStorage.getItem("boards")

const boards = JSON.parse(item)


const idx = location.search.split('=')
const index = idx[1]
const board = boards[index]


const viewFrm = document.querySelectorAll("#viewFrm > div")

for (let i=0; i<viewFrm.length; i++) {
    const id = viewFrm[i].id 
    const span = viewFrm[i].querySelector("span")
    span.innerHTML = board[id]
}

