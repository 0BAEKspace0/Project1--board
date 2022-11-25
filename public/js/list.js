const item = localStorage.getItem("boards")

if(item === null){
    const intialState = []
    const state = JSON.stringify(intialState)
    localStorage.setItem("boards", state)
    item = state    
}