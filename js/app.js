const progress=document.querySelector('.progress');
const circles=document.querySelectorAll('.circle');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
let currentActive=1;
next.addEventListener('click',function(){
    currentActive++;
    // console.log(currentActive);
    if(currentActive>circles.length){
        currentActive=4;
    }
    update();
    // console.log(currentActive);
});

prev.addEventListener('click',function(){
    currentActive--;
    if(currentActive<1){
        currentActive=1;
    }
    update();
    // console.log(currentActive);
});

function update(){
    circles.forEach((circle,index)=>{
        if(index<currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
        // for button
        if(currentActive==1){
            prev.disabled=true;
        }
        else if(currentActive==circles.length){
            next.disabled=true;
        }
        else{
            prev.disabled=false;
            next.disabled=false;
        }
    });
    
    // Progress Bar
    const actives=document.querySelectorAll('.active');
    console.error(actives.length);//2,3,4
   
    let act=actives.length-1;
    let cls=circles.length-1;

    console.log(act/cls);//1/3
    console.log(act/cls*100);

    const result=Math.floor((act/cls*100));
    console.log(result);

    progress.style.width=result+"%";

    // (if circle 3 divided by 2)
    // 33% 66% (if circle 4 divided by 3)
    // if(circle 5 divided by 4)
   

}
// actives.forEach((active,index)=>{
//     console.log(active);
//      let result=index/cls;
//      let res=result*100;
//      console.log("result= "+res);
//      console.log(index,res);
// });