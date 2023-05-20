document.body.onload = addElements;
const teacherList = document.getElementsByClassName('teacher-list')[0];
const scrollWiew = document.getElementsByClassName('scroll-wiew')[0];

function addElement() {
  const name = document.createElement('div');
  name.innerText = "Bali Bali";
  name.className = "list-desription-element";
  name.classList.add('text-center');

  const subjectTeaching = document.createElement('div');
  subjectTeaching.innerText = "Bali Bali";
  subjectTeaching.className = "list-desription-element";
  subjectTeaching.classList.add('text-center');

  const whereHeIs = document.createElement('div');
  whereHeIs.innerText = "Bali Bali";
  whereHeIs.className = "list-desription-element";
  whereHeIs.classList.add('text-center');



  const newDiv = document.createElement("div");  
  newDiv.className = "teacher-list-li-content";

  newDiv.appendChild(name);
  newDiv.appendChild(subjectTeaching);
  newDiv.appendChild(whereHeIs);

  let li = document.createElement("li");
  li.appendChild(newDiv);
  li.classList.add("teacher-list-teacher-li");
  li.classList.add("shiny");
  li.addEventListener("mousemove", (e) => {
    const { x, y } = li.getBoundingClientRect();
    li.style.setProperty("--x", e.clientX - x);
    li.style.setProperty("--y", e.clientY - y);
  });
  if (!motionMatchMedia.matches) {
    li.addEventListener("mousemove", partialApply(handleHover, li));
    li.addEventListener("mouseleave", partialApply(resetStyles, li));
  }
  teacherList.appendChild(li);
  
}

const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 6;

function handleHover(div, e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY + document.documentElement.scrollTop + scrollWiew.scrollTop - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  div.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(div, e) {
    div.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

function partialApply(fn, ...args) {
    return fn.bind(null, ...args);
}

function addElements(){
    for(let i = 0; i < 10; i++){
        addElement();
    }
}

