import "./style.css";

// Ton code JavaScript commence ici

//Nous commençons par créer une référence à notre liste non ordonnée
const ul = document.querySelector("ul");

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value);
  displayTodos();
});
//un tableau contenant des objets, où chaque objet est une todo.
// Chaque todo contient deux propriétés : un texte et son statut.
// La propriété 'done' un booléen indiquant si la todo est terminée.
const todos = [
  {
    text: "Je suis une todo",
    done: false,
  },
  {
    text: "Faire du JS",
    done: true,
  },
];

// La fonction displayTodos permet d'afficher nos todos initiales :
const displayTodos = () => {
  const todoNodes = todos.map((todo, index) => {
    return createTodoElement(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todoNodes);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <span class="todo ${todo.done ? "done" : " "}"></span>
  <p>${todo.text}</p>
  <button>X</button>
  `;
  return li;
};

const addTodo = (text) => {
  todos.push({
    text: text,
    done: false,
  });
  displayTodos();
};
displayTodos();
