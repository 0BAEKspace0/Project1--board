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



// 수정 기능 구현
const modify = document.querySelector("#modify")


function modifyHandler (e) {
    e.preventDefault()
    location.href = `../board/modify.html?index=${index}`
}

modify.addEventListener('click', modifyHandler)
