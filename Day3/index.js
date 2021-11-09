const leaders = [
    {
      id: 1,
      name: 'Cillian Murphy',
      role: 'Thomas Shelby',
      img: 'https://i.pinimg.com/originals/2a/00/9f/2a009f91ebad3a4db5c7d760cfa8a35b.jpg',
      text: 'He is best known for his performance in 28 Days Later and has appeared in big blockbuster hits such as Inception, Dunkirk and the Batman trilogy directed by Christopher Nolan as well as the 2016 film, Anthropoid, starring alongside Jamie Dornan.',
      // flag : "&#127462 &#127467",
    },
    {
      id: 2,
      name: 'Helen Mccrory',
      role: 'Polly Gray',
      img: 'https://i.pinimg.com/originals/f4/f2/52/f4f252ffcfe52095b3a88097a5932928.jpg',
      text: `Elizabeth “Polly” Gray, Thomas Shelby's aunt, serves as the matriarch for the Peaky Blinders and acts as a moderating force on Thomas. While he often rebuts her advice at first, she is one of the few characters who is able to reliably call him out when his plans are poorly contrived or overly dangerous.`
    },
    {
      id: 3,
      name: 'Paul Anderson',
      role: 'Arthur Shelby',
      img: 'https://i.pinimg.com/564x/af/d7/05/afd70517ec87ddcc57ea811837d81305.jpg',
      text: `Arthur is the eldest of the Shelby siblings and a tough member of the Peaky Blinders. He is also Deputy Vice President of Shelby Company Limited and member of the ICA, acting as his brother Tommy Shelby's right-hand man.`
    },
    {
      id: 4,
      name: 'Sophie Rundle',
      country: 'Ada Shelby',
      img: 'https://i.pinimg.com/564x/d1/7c/6d/d17c6d4e65b59ad9ea9c238f8d050db8.jpg',
      text: "Initially, Ada Shelby was the only member of the Shelby family who was not involved in the Peaky Blinders, but after Freddie Dies, she slowly gets roped in but only chooses to deal with the legal side of the business. She takes over their United States branch as the Head of Property and Acquisitions"
    },
    {
      id: 5,
      name: 'Finn Cole',
      role: 'Michael Gray',
      img: 'https://i.pinimg.com/564x/75/6b/bf/756bbfc1d3beec31f6c10e4ba4de3250.jpg',
      text: 'Michael Gray, introduced in the second season, is the son of Polly Shelby, the cousin of the Shelby siblings, and a former powerful and high ranking member of the Peaky Blinders. He is the former Chief Accountant of Shelby Company Limited, a position that causes tensions with John Shelby.'
    },
    {
      id: 6,
      name: 'Joe Cole',
      role: 'John Shelby',
      img: 'https://i.pinimg.com/564x/46/6b/7c/466b7c802f1df4770ff4ce9c3d56783a.jpg',
      text: 'ohn Michael Shelby (also Johnny and John Boy) was the third son of Arthur Shelby Sr, brother of Arthur, Thomas, Ada and Finn Shelby, as well as being the husband of Esme Shelby. John has seven children, two sons and two daughters from his ex-wife Martha Shelby, and three children from Esme, who’s genders are unknown. One of his daughters are called Katie Shelby, but his other children’s names are unknown.'
    },
    {
      id: 7,
      name: 'Tom Hardy',
      role: 'Alfie Solomons',
      img: 'https://i.pinimg.com/564x/ae/46/9f/ae469f2a734989768e47c66cce76d2e3.jpg',
      text: `Alfred "Alfie" Solomons Jr. is a Jewish gang leader who resided in Camden Town, London. It is implied that Alfie's mother was a Russian refugee, where his mother was from and he went to school in London with Darby Sabini.
      He first appeared in Series 2, Episode 2, having sent Thomas Shelby a telegram as a form of greeting, but also as a way of getting him to help with the war between the Jews and the Italians.`
    }
  ];
  
const image = document.getElementById("person_image");
const people = document.getElementById("name");
const roles = document.getElementById("roles");
const text = document.getElementById("text");

const preBtn = document.querySelector(".prev_btn");
const nextBtn =document.querySelector(".next_btn");
const randomBtn =document.querySelector(".random_btn");
var sample = document.getElementById("foobar");
sample.play();

var  currentItem=0;
window.addEventListener("DOMContentLoaded", ()=>{
    const item = leaders[currentItem];
    image.src =item.img;
    people.innerText = item.name;
    roles.innerText=item.role;
    text.innerText=item.text;
  
});

function showPerson(person){
    const item = leaders[person];
    image.src =item.img;
    people.innerText= item.name;
    roles.innerText=item.role;
    text.innerText=item.text;
}

nextBtn.addEventListener("click", ()=>{
    currentItem++;
    if(currentItem>leaders.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});

preBtn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        currentItem=leaders.length-1;
    }
    showPerson(currentItem)
});

randomBtn.addEventListener("click",()=>{
    currentItem = Math.floor(Math.random()*leaders.length);
    showPerson(currentItem)
})
