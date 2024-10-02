const itemInput = document.getElementById("itemInput");
const submitBtn = document.getElementById("submitBtn");
const itemList = document.getElementById("itemList");
let editMode = false;
let elementEdit;
// ________
function addElement() {
  let li = document.createElement("li");
  li.classList.add("item");
  let p = document.createElement("p");
  p.textContent = itemInput.value;

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.onclick = () => editItem(li);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.onclick = () => {
    li.remove();
  };
  li.append(p, editButton, deleteButton);
  itemList.append(li);
}
// ________
submitBtn.onclick = () => {
  if (itemInput.value != "") {
    if (editMode) {
      elementEdit.firstChild.textContent = itemInput.value;
      editMode = false;
      submitBtn.textContent = "Add List";
    } else {
      addElement();
    }
    itemInput.value = "";
    itemInput.classList.remove("focus");
    elementEdit.classList.remove("focus");
  }
};

// ________
function editItem(item) {
  elementEdit = item;
  itemInput.value = item.firstChild.textContent;
  editMode = true;
  submitBtn.textContent = "Edit List";
  itemInput.classList.add("focus");
  item.classList.add("focus");
}
