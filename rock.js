let c;
let d;
function one(){
    return (Math.floor(Math.random()*3));
}
// const oney=document.createElement("div");
// const oneyt=document.createElement("div");


function score1(){
    console.log("one");
    let sc1=one();
    if(sc1==0){
        c='rock';
    }
    else if(sc1==1){
        c='paper';
    }
    else{
        c='scissors';
    }
     
    //  const txty=document.createTextNode(c);
    //  oney.appendChild(txty);
    const oney=document.getElementById("div2");
    oney.innerHTML=c;
    // document.body.appendChild(oney);
}
function score2(){
    console.log("two");
    let sc2=one();
    if(sc2==0){
        d='rock';
    }
    else if(sc2==1){
        d='paper';
    }
    else{
        d='scissors';
    }
   
    //  const tty=document.createTextNode(d);
    //  oneyt.appendChild(tty);
    const oneyt=document.getElementById("div3");
    oneyt.innerHTML=d;
    // document.body.appendChild(oneyt);
}
function win(){
    let text;
    if(c=='rock'){
        if(d=='rock'){
            text="0";
        }
        else if(d=='scissors'){
            text="Winner is User1";
        }
        else{
            text="Winner is User2";
        }
    }
    else if(c=='scissors'){
        if(d=='rock'){
            text="Winner is User2";
        }
        else if(d=='scissors'){
            text="0";
        }
        else{
            text="Winner is User1";
        }
    }
    else if(c=='paper'){
        if(d=='rock'){
            text="Winner is User1";
        }
        else if(d=='scissors'){
            text="Winner is User2";
        }
        else{
            text="0";
        }
    }
    return text;
}
// let sc=document.createElement("div");
function score(){
// let scoreOne=document.createElement("div");
// let scoreTwo=document.createElement("div");
// let a1=document.createTextNode(c);
// let b1=document.createTextNode(d);
// scoreOne.appendChild(a1);
// scoreTwo.appendChild(b1);
// document.body.appendChild(scoreOne);
// document.body.appendChild(scoreTwo);
    let txt=win();
    if(txt=='0'){
        document.getElementById('im').src="nowin.png";
        const k=document.getElementById('im');
        k.style.visibility='visible';
                    // const kt=document.getElementById('winn');
                    // kt.style.visibility='hidden';
                    // const kx=document.getElementById('wint');
                    // kx.style.visibility='hidden';
                    // const k=document.getElementById('im');
                    // k.style.visibility='visible';
        // sc.style.display='none';
    }
    else if(txt=='Winner is User1'){
        document.getElementById('im').src="one.jpg";
        const k=document.getElementById('im');
        k.style.visibility='visible';
                    // const kt=document.getElementById('winn');
                    // kt.style.visibility='visible';
                    // const kx=document.getElementById('wint');
                    // kx.style.visibility='hidden';
                    // const k=document.getElementById('im');
                    // k.style.visibility='hidden';
        // sc.innerHTML=txt;
        // document.body.appendChild(sc);
        // sc.style.display='block';
    }
    else{
        document.getElementById('im').src="two.jpg";
        const k=document.getElementById('im');
        k.style.visibility='visible';
                    // const kx=document.getElementById('wint');
                    // kx.style.visibility='visible';
                    // const kt=document.getElementById('winn');
                    // kt.style.visibility='hidden';
                    // const k=document.getElementById('im');
                    // k.style.visibility='hidden';
        // sc.innerHTML=txt;
        // document.body.appendChild(sc);
        // sc.style.display='block';
    }
}