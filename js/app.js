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
    
    //extract the dom rect oject of the element to get it's dimensions relative to the view port
    const rect=element.getBoundingClientRect();
    //return true if element if visible in the view port
    return rect.top<150 &&rect.bottom>150;
  }
  //end helper functions
    //start main functions
    const createMenu=()=>{
      //create the navigation menu in the fragment element
      createItems();
      const list = document.querySelector('#navbar__list');
      //add the virual fragment to the navbar list
      list.appendChild(fragment);
    }
    const setScrollBehavior=()=>{
    const anchors=document.querySelectorAll('ul a');
    for (const anchor of anchors){
      anchor.addEventListener('click',(e)=>{
        // remove default behavior 
        e.preventDefault();
    
        const section=document.querySelector(anchor.getAttribute('href'));
        // scroll to the corresponding section and make it smooth
        section.scrollIntoView({behavior:"smooth"});
    
      })
    
    }
    }
    const setActive=()=>{
      for(section of sections){
        const anchor=document.querySelector('#section-'+section.id);
        if(checkVisible(section))
        {
          anchor.classList.add('active');
          section.classList.add('your-active-class');
        }
        else{
          anchor.classList.remove('active');
          section.classList.remove('your-active-class');
        }
      }
    }
    const setFooterActive=()=>{
      const rect= pageFooter.getBoundingClientRect();
      if(rect.top>=0&&rect.bottom<=window.innerHeight)
      {
        scrollToTopbtn.classList.add('btn-visible');
    
      }
      else{
        scrollToTopbtn.classList.remove('btn-visible');
      }
    }
    const hideHeader=()=>{
      const header=document.querySelector('.page__header');
      //if timer is initlialized clear it and show the menu
      if(timer!==null){
        clearTimeout(timer);
        header.style.display='block';
      }
      // hide menu after 5 seconds when the scrolling ends
      timer=setTimeout(() => {
        if(scrollY!==0){
        header.style.display='none';
        }
      }, 5000);
      
    }
    const scrolltop=()=>{
      const rootElement=document.documentElement;
      // scroll to top of the page smoothly
      window.scrollTo({top:0,behavior:'smooth'});
    }
    //end main functions

     
  
  
