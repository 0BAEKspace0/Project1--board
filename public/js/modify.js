const modifyFrm = document.querySelector("#modifyFrm")

const idx= location.search.split("=")
const index = idx[1]

const boards = JSON.parse(localStorage.getItem("boards"))

const item = boards[index]

const writer = document.querySelector("input[name=writer]")
const subject = document.querySelector("input[name=subject]")
const content = document.querySelector("textarea[name=content]")

writer.value = item.writer
subject.value = item.subject
content.innerHTML = item.content



function submitHandler (e) {
    e.preventDefault()
    item.writer = writer.value
    item.subject = subject.value
    item.content = content.value
    
    const modified = JSON.stringify(boards)
    localStorage.setItem("boards", modified)

    location.href = `../board/view.html?index=${index}` 
}

modifyFrm.addEventListener('submit', submitHandler)