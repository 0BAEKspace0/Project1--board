const item = window.localStorage.getItem("boards")
const delete_btn = document.querySelector("#delete")
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


delete_btn.addEventListener("click", function(){
    const deletCheck = confirm("삭제하시겠습니까?")
    if(deletCheck){
        boards.splice(index, 1)
        const item = JSON.stringify(boards)
        localStorage.setItem("boards", item)
        location.href= `/board/list.html?index=${index}`

    }
})

const a = document.referrer
if (document.referrer.indexOf("list.html") !== -1){
    board.hit += 1
    const item = JSON.stringify(boards)
    localStorage.setItem("boards", item)
}