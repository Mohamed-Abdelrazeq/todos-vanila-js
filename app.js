const todos = document.querySelector(".todos");
const todoForm = document.querySelector(".add");
const search = document.querySelector(".search input");

// delete todos
todos.addEventListener("click", function (e) {
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
  }
});

// add todos
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const todo = todoForm.add.value.trim();

  todos.innerHTML += ` <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

  todoForm.reset();
});

// filter todos
search.addEventListener("keyup", function (e) {
  e.preventDefault();
  const todosList = document.querySelectorAll(".todos li");
  const keyword = search.value.trim().toLowerCase();
  todosList.forEach((element) => {
    if (element.children[0].innerHTML.includes(keyword)) {
      element.classList = [
        "list-group-item d-flex justify-content-between align-items-center",
      ];
    } else {
      element.classList = ["hidden"];
    }
  });
});
