let sym="<i class='fa-solid fa-xmark fa-2xl' style='color:#2196f3'></i>";
let c1=sym;
let c2="<i class='fa-solid fa-o fa-2xl' style='color: red'></i>";
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
                if(sym === c1)
                {
                    sym=c2;
                    c1=this.innerHTML;
                }
                else
                {
                    sym=c1;
                    c2=this.innerHTML;
                }
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
            if(sym === "<i class='fa-solid fa-xmark' style='color:#2196f3'></i>")
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
    sym = c1;
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
