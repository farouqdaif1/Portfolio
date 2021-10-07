// object to store data
const data = {
  main: {
    head: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    language1: 'html',
    language2: 'Bootstrap',
    language3: 'Ruby ',
    img: 'image/snap.png',
    seeLive: 'https://www.google.com/',
    seeSource: 'https://www.google.com/',
  },
  proj1: {
    head: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    language1: 'html',
    language2: 'Bootstrap',
    language3: 'Ruby ',
    img: 'image/snap.png',
    seeLive: 'https://www.google.com/',
    seeSource: 'https://www.google.com/',
  },
  proj2: {
    head: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    language1: 'html',
    language2: 'Bootstrap',
    language3: 'Ruby ',
    img: 'image/snap.png',
    seeLive: 'https://www.google.com/',
    seeSource: 'https://www.google.com/',
  },
  proj3: {
    head: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    language1: 'html',
    language2: 'Bootstrap',
    language3: 'Ruby ',
    img: 'image/snap.png',
    seeLive: 'https://www.google.com/',
    seeSource: 'https://www.google.com/',
  },
  proj4: {
    head: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    language1: 'html',
    language2: 'Bootstrap',
    language3: 'Ruby ',
    img: 'image/snap.png',
    seeLive: 'https://www.google.com/',
    seeSource: 'https://www.google.com/',
  },
  proj5: {
    head: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    language1: 'html',
    language2: 'Bootstrap',
    language3: 'Ruby ',
    img: 'image/snap.png',
    seeLive: 'https://www.google.com/',
    seeSource: 'https://www.google.com/',
  },
  proj16: {
    head: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    language1: 'html',
    language2: 'Bootstrap',
    language3: 'Ruby ',
    img: 'image/snap.png',
    seeLive: 'https://www.google.com/',
    seeSource: 'https://www.google.com/',
  },
};
// Array to store the objects from dataObject
const projArr = [data.main, data.proj1, data.proj2, data.proj3, data.proj4, data.proj5, data.proj6];
// JS for the Modal popups
const main = document.querySelector('#see-btn');
const closeM = document.querySelector('#close-Model');
const side = document.querySelectorAll('.see-pro');
// JS for the data object modal skeleton
const title = document.querySelector('.model-title');
const leng1 = document.querySelector('#leng1');
const leng2 = document.querySelector('#leng2');
const leng3 = document.querySelector('#leng3');
const textPro = document.querySelector('#text-pro');
const Source = document.querySelector('#see_Source');
const live = document.querySelector('#see_live');
const imageProj = document.querySelector('.image-proj');
// function for add content to skelton
function DataInmodel(dpro) {
  title.innerHTML = dpro.head;
  textPro.innerHTML = dpro.description;
  leng1.innerHTML = dpro.language1;
  leng2.innerHTML = dpro.language2;
  leng3.innerHTML = dpro.language3;
  imageProj.src = dpro.img;
  live.href = dpro.seeLive;
  Source.href = dpro.seeSource;
}

// function for add active class
function popUp() {
  document.querySelector('.modal').classList.toggle('active');
  document.querySelector('#overaly').classList.toggle('active-o');
}
// Add listener for buttons
main.addEventListener('click', popUp);
closeM.addEventListener('click', popUp);
side.forEach((x) => {
  x.addEventListener('click', popUp);
});
// Get the data from Array
document.querySelector('#main').addEventListener('click', DataInmodel(projArr[0]));
document.querySelector('#proj_2').addEventListener('click', DataInmodel(projArr[1]));
document.querySelector('#proj_3').addEventListener('click', DataInmodel(projArr[2]));
document.querySelector('#proj_3').addEventListener('click', DataInmodel(projArr[3]));
document.querySelector('#proj_5').addEventListener('click', DataInmodel(projArr[4]));
document.querySelector('#proj_6').addEventListener('click', DataInmodel(projArr[5]));
document.querySelector('#proj_7').addEventListener('click', DataInmodel(projArr[6]));