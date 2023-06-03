const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector('#info');
const startCells=["","","","","","","","",""];
let go="circle";
infoDisplay.textContent="Circle goes first";
function createBoard(){
    startCells.forEach((cell,index)=>{
        const cellElement = document.createElement("div");
        cellElement.classList.add('square');
        cellElement.id=index;
        cellElement.addEventListener('click',addGo);
        gameBoard.append(cellElement);
    })
}
var count=0;
createBoard();
function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go=go==="circle"?"cross":"circle";
    infoDisplay.textContent="it is now "+go+"'s go.";
    e.target.removeEventListener("click",addGo);
    checkScore();
}
function checkScore(){
    const allSquares = document.querySelectorAll(".square");
    const winningcombos=[[0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

for(var i=0;i<winningcombos.length;i++){
    var array=winningcombos[i];
    const circleWins= array.every(cell=>allSquares[cell].firstChild?.classList.contains('circle')); 
    
   if(circleWins){
    infoDisplay.textContent="Circle Wins!";
    allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)));
   //Above line is the code to remove event listener
   return;  
}}
for(var i=0;i<winningcombos.length;i++){
    var array=winningcombos[i];
    const crossWins= array.every(cell=>allSquares[cell].firstChild?.classList.contains('cross')); 
    
   if(crossWins){
    infoDisplay.textContent="Cross Wins!";
    allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)));
   //Above line is the code to remove event listener
   return;  
}}

var drawCheck = true;
allSquares.forEach(cell=>{
    if(!cell.firstChild?.classList.contains('circle') && !cell.firstChild?.classList.contains('cross')){
        drawCheck=false;
    }
   
}
   )
 console.log(drawCheck);
 if(drawCheck){
    infoDisplay.textContent="Its a draw!";
    allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)));
    //Above line is the code to remove event listener
    return;  
 }

}