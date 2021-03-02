const container = document.querySelector('#container');
const todoAddButton = document.querySelector('#todo-add');
const todoTextInput = document.querySelector('#todo-text');

function addTodo(text) {
  const li = document.createElement('li');
  li.textContent = text;
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '×';
  deleteBtn.addEventListener('click', e => {
    e.target.parentNode.remove();
  });
  li.append(deleteBtn);
  container.append(li);
}

todoAddButton.addEventListener('click', e => {
  addTodo(todoTextInput.value)
});

todoTextInput.addEventListener('keyup', e => {
  todoAddButton.disabled = e.target.value.length == 0;
});