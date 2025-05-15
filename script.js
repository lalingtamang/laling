// const Sunshine = document.getElementById("Sunshine");
// const navlinks = document.getElementById("navlinks");

// Sunshine.addEventListener('click', () => {
//     navlinks.classList.toggle('active');
// });
//  const text = "Welcome to Sunshine Resort";
//  const typedText = document.getElementById('typed-text');
// let index = 0;

//  function type(){
//     if(index < text.length){
//         typedText.textContent += text.charAt(index);
//        index++;
//        setTimeout(type, 150);

//    }
//  }
// type();
// Projects
const projects = [
    {
        image: "sun.jpg",
        title: "Sunshine Resort",
        description: " Your Private Paradise, nestled in the serene village of Phedi Patan."
    },
    {
        image: "phewa.webp",
        title: "Phewa lake",
        description: " Phewa Lake, the second largest lake in Nepal and the jewel of Pokhara Valley"
    },
    {
        image: "talbarahi.jpg",
        title: "Talbarahi Lake",
        description: "Tal Barahi Temple, also known as the Lake Temple or Barahi Temple"
    },
]
const container = document.getElementById ("project");

projects.forEach(project => {
    const item = document.createElement("div");
    item.className ="project-item";
     item.innerHTML = `
    <img src = "${ project.image}" alt="${project.title}"/>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    `;
    container .appendChild(item);
});
const proo = [
    {
        image:"sunshine.jpg",
        title: "Sunshine Resort",
        description:"  Your Private Paradise, nestled in the serene village of Phedi Patan",
    },
    {
        image:"phewa.webp",
        tittle:" Phewa Lake",
        description:" Phewa Lake, the second largest lake in Nepal and the jewel of Pokhara Valley",
    },
]
const containers =document.getElementById("pro");

proo.forEach(pro => {
    const type = document.createElement("div");
    type.className = "proo";
    type.innerHTML = `
    <img src ="${ proo.image}" alt="${proo.title}"/>
    <h3>${ proo.title}</h3>
    <p>${ proo.description}</p>
    `;
    containers .appendChild(type);
});