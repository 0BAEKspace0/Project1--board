const item = localStorage.getItem("boards")

if(item === null){
    const intialState = []
    const state = JSON.stringify(intialState)
    localStorage.setItem("boards", state)
    item = state    
}

function template (item, index){
    return `
    <tr>
        <td>${index +1}</td>
        <td><a href="/board/view.html?index=${index}">${item.subject}</a></td>
        <td>${item.content}</td>
        <td>${item.writer}</td>
        <td>${item.date}</td>
        <td>${item.hit}</td>
    </tr>
    `
}

const tbody = document.querySelector("tbody")
const boards = JSON.parse(item)
for(let i = boards.length -1 ; i >=0 ; i--){
    tbody.innerHTML=tbody.innerHTML+template(boards[i], i)   
}