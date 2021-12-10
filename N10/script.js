ul.onclick = (event) => {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
};

function toggleSelect(li) {
  li.classList.toggle("selected");
}

function singleSelect(li) {
  ul.querySelectorAll(".selected").forEach((elem) =>
    elem.classList.remove("selected")
  );

  li.classList.add("selected");
}
