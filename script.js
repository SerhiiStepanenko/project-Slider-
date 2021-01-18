// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

let a12 = document.querySelector('.img-12-max');

const next = document.querySelectorAll('.next');
// next[0].onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
// prev[0].onclick = prevFunction;

const reset = document.querySelector('.reset');
// reset.onclick = resetFunction;

function nextFunction() {
    if(count == 5){
        count = -1;
        images[5].classList.remove('active-img');
        images[0].classList.add('active-img');
        a12.src = images[0].src;
    }
    count++;
    images[count].classList.add('active-img');
    images[count-1].classList.remove('active-img');
    
    a12.src = images[count].src;

}

function prevFunction() {
    if(count == 0){
        count = 6;
        images[0].classList.remove('active-img');
        images[5].classList.add('active-img');
        a12.src = images[5].src;
    }
    count--;
    images[count+1].classList.remove('active-img');
    images[count].classList.add('active-img');
    a12.src = images[count].src;
}

function resetFunction(){
    for(let item of images){
        item.classList.remove('active-img');
        images[0].classList.add('active-img');
        a12.src = images[0].src;
    }
    count = 0;
};

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)){
    next[0].ontouchstart = nextFunction;
    prev[0].ontouchstart = prevFunction;
    reset.ontouchstart = resetFunction;
    }else{
        reset.onclick = resetFunction;
        next[0].onclick = nextFunction;
        prev[0].onclick = prevFunction;
}
// ваше событие здесь!!!
