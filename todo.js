// const todoInput = document.getElementById('todoInput');
// const addBtn = document.getElementById('Button');
// const todoList = document.getElementById('todoList');

// addBtn.addEventListener('click',(e)=> {
//     e.preventDefault();

//     const inputValue = todoInput.ariaValueMax.trim();
//     if(inputValue===''){
//         alert('Enter something')
//     }else{
//         cont li= document.createElement('li');
//         li.className = 'list-group-item d-flex justify-content-between p-3';
//         // li.innerHtml = 
//     }
// })


const addBtnElement = document.getElementById('addBtn');
const todoElement = document.getElementById('todo');
// const todoList = document.getElementById('todoList');

addBtnElement.addEventListener('click', (e)=>{
    console.log(todoElement.value);

  var ul = document.getElementById("orderedList");
  var li = document.createElement("li");
  li.classList.add("list-group-item");
  li.classList.add("justify-content-between");
  li.classList.add("d-flex");
  li.classList.add("p-3");
  
  

  const html = `<span> ${todoElement.value}</span>
  <div>
    <i class="bi bi-pencil-square" ></i>
    <i class="bi bi-trash"></i>
  </div>`
  li.innerHTML = html;
  ul.appendChild(li);


})

const removeElement = document.getElementById('remove');

removeElement.addEventListener('click',(e)=>{
    const l3 = document.getElementById('li-3');
    l3.remove();



})
