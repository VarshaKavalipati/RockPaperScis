const rock=document.getElementById('fist');
const paper=document.getElementById('hand');
const scis=document.getElementById('cross');
const score=document.getElementById('score');
const analysis=document.getElementById('analysis');
const result=document.getElementById('result');
const stop=document.getElementById('stop');
const list=['rock','paper','scis'];
let sc=0;
const f=()=>{
    let k='rock';
    cal(k)
}
const h=()=>{
    let k='paper';
    cal(k);
}
const s=()=>{
    let k='scis';
    cal(k);
}
const stp=()=>{
    sc=0;
    result.innerText=' ';
    analysis.innerText=' ';
    score.innerText=' ';
}
const cal=(k)=>{
    let m=Math.floor(Math.random()*3);
    let p=list[m];
    if(k=='rock'){
        if(p=='rock'){
            result.innerText="It's a Draw";
            analysis.innerText='Rock VS Rock';
        }
        else if(p=='paper'){
            result.innerText="You lose!";
            analysis.innerText='Rock VS Paper';
            sc--;
        }
        else if(P=='scis'){
            result.innerText="You win!";
            analysis.innerText='Rock VS Scissors';
            sc++;
        }
    }
    else if(k=='paper'){
        if(p=='rock'){
            result.innerText="You win!";
            analysis.innerText='Paper VS Rock';
            sc++;
        }
        else if(p=='paper'){
            result.innerText="It's a Draw";
            analysis.innerText='Paper VS Paper';
        }
        else if(P=='scis'){
            result.innerText="You lose!";
            analysis.innerText='Paper VS Scissors';
            sc--;
        }
    }
    else if(k=='scis'){
        if(p=='rock'){
            result.innerText="You lose!";
            analysis.innerText='Scissors VS Rock';
            sc--;
        }
        else if(p=='paper'){
            result.innerText="You win!";
            analysis.innerText='Scissors VS Paper';
            sc++;
        }
        else if(P=='scis'){
            result.innerText="It's a Draw";
            analysis.innerText='Scissors VS Scissors';
        }
    }
    score.innerText=sc;
}