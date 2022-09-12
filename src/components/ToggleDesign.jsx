import React from 'react'
import '../css/ToggleDesign.css'

// const themeChangeBtn = document.querySelector("#theme-change-btn");
// const calculatorContainer = document.querySelector('.calculator-input')
// const calcOperators = document.querySelector('.calculator-operators')


// $('label').on('click', function() {
//     $(this).toggleClass('second');
// });


// function themeChange() {
//     if (themeChangeBtn.checked) {
//         document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
//         document.body.style.color = 'black';
//         // result.id = 'input-result2';
        
//     } else {
//         $("*[style]").removeAttr("style");
//         result.removeAttribute('id');
//         calculatorContainer.removeAttribute('id');
//     }
// }


// $(themeChangeBtn).on('change', themeChange);

export default function ToggleDesign() {
  return (
    <div className="changeTheme">
      <p className='change-text'>Change color theme</p>
      <input type="checkbox" id="theme-change-btn" />
        <label className="theme-checkbox" htmlFor="theme-change-btn"></label>
    </div>
  )
}
  
  










