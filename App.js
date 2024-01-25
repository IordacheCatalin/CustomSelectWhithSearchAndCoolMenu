document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((customSelect) => {
    const input = customSelect.querySelector(".custom-select-input");
    const optionsList = customSelect.querySelector(".custom-select-options");
    const options = Array.from(optionsList.getElementsByTagName("li"));

    input.addEventListener("click", function () {
      if (optionsList.style.display === "block") {
        optionsList.style.display = "none";
      } else {
        optionsList.style.display = "block";
      }
    });

    input.addEventListener("input", function () {
      const filter = input.value.toUpperCase();

      options.forEach((option) => {
        const txtValue = option.textContent || option.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = "";
        } else {
          option.style.display = "none";
        }
      });

      optionsList.style.display = "block"; // Show options on input
    });

    optionsList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        input.value = e.target.textContent;
        console.log(input.value);
        optionsList.style.display = "none";
      }
    });

    document.addEventListener("click", function (e) {
      if (!e.target.matches(".custom-select-input")) {
        optionsList.style.display = "none";
      }
    });
  });
});
