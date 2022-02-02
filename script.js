// console.log("Work");
const msg=document.querySelector('.msg');
const input=document.querySelector('input');
const btn = document.querySelector(".btn");
let newWords="";
let randWords="";
let play = false;
let sword=["python","javascript","php","C++","java","html","css","andorid","angular","sql"];
const creatNewWord = () =>{
    // console.log(sword[4]);
    let ranNum=Math.floor(Math.random()*sword.length);
    // console.log(ranNum);
    let tempSword=sword[ranNum];
    return tempSword;
}
const scrambleWords = (arr)=>{
    for(let i=arr.length-1;i>0;i--){
        let temp=arr[i];
        // console.log(temp);
        let j=Math.floor(Math.random()*(i+1));
        // console.log(i);
        // console.log(j);
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

btn.addEventListener('click',()=>{
    // console.log("hello");
    if(!play)
    {
        play=true;
        btn.innerHTML = "Guess";
        input.classList.toggle('hidden');
        newWords=creatNewWord();
        randWords =scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));
        msg.innerHTML=`Guess the word: ${randWords}`;
    }
    else{
        let tempWord=input.value;
        if(tempWord===newWords){
            // console.log("Correct");
            play=false;
            msg.innerHTML=`Awesome it's Correct.It is ${newWords}`;
            btn.innerHTML="Start Again";
            input.classList.toggle('hidden');
            input.value="";
        }
        else{
            // console.log("Incorrect");
            msg.innerHTML=`Sorry it's incorrect.Please try again ${randWords}`;
            input.value="";
        }
    }
})