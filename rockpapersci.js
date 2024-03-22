let user_score=0;
let comp_score=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const user=document.querySelector('#user');
const comp=document.querySelector('#comp');

const getcompchoice=()=>
{
    const options=['rock','paper','scissor'];
    return options[Math.floor(Math.random()*3)];
}

const PlayGame= (userchoice)=>
{
    const compchoice=getcompchoice();
    if (userchoice===compchoice)
    {
        console.log('Draw Game');
        msg.innerText=`Draw Game. Play Again! ${userchoice} is same as ${compchoice}`;
        msg.style.backgroundColor='purple';

    }
    else {
        let userwin=true;
        if (userchoice==='rock')
        {
            userwin=compchoice==='paper'? false:true;
        }
        else if (userchoice==='paper')
        {
            userwin=compchoice==='scissor'?false:true;
        }
        else{
            userwin=compchoice==='rock'?false:true;
        }
        if (userwin)
        {
            console.log('You win');
            msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor='green';
            user_score++;
            user.innerText=user_score;
        }
        else
        {
            console.log('You lose');
            msg.innerText=`You lose ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor='red';
            comp_score++;
            comp.innerText=comp_score;
        }
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>
    {
        const userchoice=choice.getAttribute('id');
        PlayGame(userchoice);
    })
}
)
