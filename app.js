turn = 'X'
let squares=[];
let title = document.querySelector(".title");

let end =(num1, num2 , num3) =>{
    title.innerHTML =`${squares[num1]} winner `
    document.getElementById('item' + num1).style.background = "#000"
    document.getElementById('item' + num2).style.background = "#000"
    document.getElementById('item' + num3).style.background = "#000"
    setInterval(function(){ title.innerHTML += '.'} , 1000)
    setTimeout(function(){location.reload()} , 4000)
}
let winner = () => {
for(let i = 1 ; i<10 ; i++ ){
    squares[i] = document.getElementById('item' + i).innerHTML;
}
if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
{
    end(1 , 2, 3 )
    document.querySelector(".line3").style.display ="block"
}

else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '')
{
    end(4 , 5, 6 )
    document.querySelector(".line4").style.display ="block"
}
else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '')
{
    end(7,8,9)
    document.querySelector(".line5").style.display ="block"
}
else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '')
{
    end(1,4,7)
    document.querySelector(".line").style.display ="block"
}
else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '')
{
    end(2,5,8)
    document.querySelector(".line1").style.display ="block"
}
else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '')
{
    end(3,6,9)
    document.querySelector(".line2").style.display ="block"
}
else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '')
{
    end(1,5,9)
    document.querySelector(".line7").style.display ="block"
}
else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '')
{
    end(3,5,7)
    document.querySelector(".line6").style.display ="block"
}
else if(squares[1] != '' && squares[2] != '' && squares[3] != '' && squares[4] != '' && squares[5] != '' && squares[6] != '' && squares[7] != '' && squares[8] != '' && squares[9] != ''){
    title.innerHTML =`No winner `
    setInterval(function(){ title.innerHTML += '.'} , 1000)
    setTimeout(function(){location.reload()} , 4000)
}
}
let game = (id) => {
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == ""){
        element.innerHTML ='X' 
        turn ='O';
        title.innerHTML='O'
        element.style.color ="#dd1c96"
    }
    else if(turn === 'O' && element.innerHTML == ""){
        element.innerHTML ='O' 
        turn ='X';
        title.innerHTML='X'
        element.style.color ="#fff"
    }
    winner()
    };

