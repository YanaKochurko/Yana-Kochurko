const formArray = [
  { type: "text", name: "text" },
  { type: "password", name: "passwords" },
  { type: "file", name: "file" },
  { type: "radio", name: "radio" },
  { type: "radio", name: "radio" },
  { type: "radio", name: "radio" },
];

const form = document.createElement("form");

const inputs = createInputs(formArray);
inputs.forEach((input) => form.appendChild(input));

document.body.appendChild(form);

function createInputs(formArray) {
  const output = [];
  formArray.forEach((element) => {
    const newInput = document.createElement("input");
    newInput.type = element.type;
    newInput.name = element.name;
    output.push(newInput);
  });

  return output;
}
