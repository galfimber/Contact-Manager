const validate = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (e.target.type === "text") {
        input.value = input.value.replace(/[^a-zA-Zа-яА-ЯЁё]/g, "");
      }
    });
  });
};

export default validate;
