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



// document.addEventListener('DOMContentLoaded', function () {
//   const customSelects = document.querySelectorAll('.custom-select');

//   customSelects.forEach(customSelect => {
//       const input = customSelect.querySelector('.custom-select-input');
//       const optionsList = customSelect.querySelector('.custom-select-options');
//       console.log(optionsList)
//       const options = Array.from(optionsList.getElementsByTagName('li'));
   
//       input.addEventListener('click', function () {

//           customSelects.forEach(x => {
//               if (x !== customSelect) {
//                   x.querySelector('.custom-select-options').style.display = 'none';
//               }
//           });
                     
//           if (optionsList.style.display === 'block') {
//               optionsList.style.display = 'none';
//           } else {
//               optionsList.style.display = 'block';
//           }
//       });

//       input.addEventListener('input', function () {
//           const filter = input.value.toUpperCase();

//           options.forEach(options => {
//               const txtValue = options.textContent || options.innerText;
//               const startsWithFilter = txtValue.toUpperCase().startsWith(filter);

//               if (startsWithFilter) {
//                   options.style.display = 'block';
//               } else {
//                   options.style.display = 'none';
//               }
//           });

//           optionsList.style.display = 'block'; // Show options on input
//       });

 

//       optionsList.addEventListener('click', function (e) {
//           if (e.target.tagName === 'LI') {
//               var selectedValue = e.target.getAttribute('data-value');
//               var selectedText = e.target.textContent;
//               input.value = selectedText;
              

//               switch (true) {
//                   case e.target.classList.contains('vehicle-make-list'):
//                       setHiddenInputValue('Vehicle_Make', selectedValue, '#Vehicle_Make');
//                       break;
//                   case e.target.classList.contains('adress-model-list'):
//                       setHiddenInputValue('Vehicle_Model', selectedValue);
//                       break;
//                   case e.target.classList.contains('adress-county-list'):
//                       setHiddenInputValue('Insured_Adress_County', selectedValue, '#Insured_Adress_County');
//                       break;
//                   case e.target.classList.contains('adress-city-list'):
//                       setHiddenInputValue('Insured_Adress_City', selectedValue);
//                       break;
//                   case e.target.classList.contains('vehicle-FuelType-list'):
//                       setHiddenInputValue('Vehicle_FuelType', selectedValue);
//                       break;
                      
//               }

//               optionsList.style.display = 'none';
//           }
//       });

//       function setHiddenInputValue(inputId, value, trigger = null) {
//           var hiddenInput = document.getElementById(inputId);
//           if (hiddenInput) {
//               hiddenInput.value = value;
//               if (trigger) $(trigger).trigger('change');
//               console.log(hiddenInput.value);
//           }
//       }

     
//       document.addEventListener('click', function (e) {
//           if (!e.target.matches('.custom-select-input')) {
//               optionsList.style.display = 'none';
//           }
//       });
//   });
// });