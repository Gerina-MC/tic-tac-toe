let sym="X";
let n=0;
let splay=0;
let play=splay;
let winpos=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let gameend=false;
let wins=[0,0];
function onld()
{
    document.getElementById("p"+splay.toString()).classList.add("playing");
    for(let i=1;i<10;i++){
        document.getElementById(i).addEventListener("click",function(){
            if(this.innerHTML === "" && !gameend)
            {
                this.innerHTML=sym;
                n++;
                win();
                if(sym === "X")
                sym="O";
                else
                sym="X";
            }
        }
    );
    }
}
function win()
{
    for(let i=0;i<winpos.length;i++)
    {
        if(document.getElementById(winpos[i][0]).innerHTML === sym && document.getElementById(winpos[i][1]).innerHTML === sym
        && document.getElementById(winpos[i][2]).innerHTML === sym)
        {
            wins[play]=wins[play]+1;
            document.getElementById("k").innerHTML="Player "+(play+1).toString()+" wins";
            document.getElementById("p"+play.toString()).innerHTML="Player "+(play+1).toString()+" - "+wins[play].toString();
            if(sym === "X")
            {
                document.getElementById("r").innerHTML="<button onclick='res()'>New Game</button>";
            }
            else
            {
                document.getElementById("r").innerHTML="<button onclick='res()'>New Game</button>";
            }
            gameend=true;
            break;
        }
        if(n==9 && !gameend)
        {
            document.getElementById("k").innerHTML="Draw";
            document.getElementById("r").innerHTML="<button onclick='res()'>New Game</button>";
            gameend=true;
        }
    }
    if(!gameend)
    {
        document.getElementById("p"+play.toString()).classList.remove("playing");
        if(play == 0)
        play=1;
        else
        play=0;
        document.getElementById("p"+play.toString()).classList.add("playing");
    }
}
function res()
{
    sym = "X";
    n = 0;
    document.getElementById("k").innerHTML="";
    document.getElementById("r").innerHTML="";
    for(let i=1;i<10;i++)
    {
        document.getElementById(i).innerHTML="";
    }
    document.getElementById("p"+play.toString()).classList.remove("playing");
    if(splay == 0)
    splay = 1;
    else
    splay = 0;
    play=splay;
    document.getElementById("p"+splay.toString()).classList.add("playing");
    gameend=false;
}
