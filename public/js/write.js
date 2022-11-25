const writeFrm = document.querySelector("#writeFrm")

class Board{
    constructor(subject, writer ,content ){
        this.index = 0
        this.subject = subject
        this.content = content
        this.writer = writer
        this.date = this.getToday(new Date());
        this.hit = 0;
      }
      getToday(date) {
        let mm = date.getMonth() + 1; // 0 ~ 11
        mm = (mm > 9 ? "" : "0") + mm; // 01 02...09 10 11
        let dd = date.getDate(); // 1 ~ 31
        dd = (dd > 9 ? "" : "0") + dd;
        let yyyy = date.getFullYear();
        const arr = [yyyy, mm, dd];
        return arr.join(" / ");
      }
    }

function submitHandler(e){
    e.preventDefault()
    const subject = e.target.subject.value
    const content = e.target.content.value
    const writer = e.target.writer.value
    const instance = new Board (subject, content, writer)
    const boards = JSON.parse(localStorage.getItem("boards"))
    boards.push(instance) 
    const index =  boards.length-1
    const item = JSON.stringify(boards)
    localStorage.setItem("boards", item)
    e.target.reset()
    location.href= `/board/view.html?index=${index}`

} 

writeFrm.addEventListener("submit" ,submitHandler)
