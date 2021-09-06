// begin global variables

const sections = document.querySelectorAll('section'); // 
const fragment= document.createDocumentFragment();
const scrollToTopbtn=document.querySelector('#scrolltop');
const pageFooter= document.querySelector('.page__footer');
let timer=null;
//end global variables


//start helper functions 
const createItems=()=>{
  for (const section of sections){
    const location=section.id;
    const listName=section.dataset.nav;
    const list=document.createElement('li');
    const anchor=document.createElement('a');
    anchor.textContent=listName;
    anchor.href=`#${location}`;
    anchor.id='section-'+location;
    anchor.classList.add('menu__link');
    list.appendChild(anchor);
    fragment.appendChild(list);
  }
  }
  const checkVisible=(element)=>{
    const rect=element.getBoundingClientRect();
    return rect.top<150 &&rect.bottom>150;
  }
  
  //end helper functions
