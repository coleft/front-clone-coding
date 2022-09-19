const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', ()=>{
    moreBtn.classList.toggle('clicked');    //자체 모양 변화
    title.classList.toggle('clamp');        //다른 상태
});