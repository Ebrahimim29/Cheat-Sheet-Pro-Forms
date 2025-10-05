// -------Part 237:Cheat Sheet Dom Professional--------------

//--------Part1--------------
// document.addEventListener("DOMContentLoaded", () => {
//   const $ = (selector, root = document) => root.querySelector(selector);
//   const form = $("#myForm");
//   const username = $("#username");
//   const countMessage = $(".count-message");
//   const message = $(".message");

  // SetCustomValidity(): متدی است که متن خطای پیش 
  // فرض مرورگر رو تغییر میده


  // 1️⃣ هر بار که کاربر تایپ می‌کند
  // username.addEventListener("input", () => {
  //   countMessage.textContent = username.value.length;
  //   if (username.value.length < 5) {
      // ایجاد پیام خطای سفارشی
      // username.setCustomValidity("نام کاربری باید حداقل ۵ حرف داشته باشد");
      // message.textContent = "⚠ نام کاربری باید حداقل ۵ حرف داشته باشد";
      // message.classList.add("show");
      // reportValidity → نمایش پیام خطای سفارشی روی فیلدهای نامعتبر
  //     form.reportValidity();
  //   } else {
  //     // پاک کردن پیام خطا
  //     username.setCustomValidity("");
  //     message.textContent = "";
  //     message.classList.remove("show");
  //   }
  // });

  // 2️⃣ هنگام ارسال فرم
//   form.addEventListener("submit", (e) => {
//     // checkValidity → بررسی اعتبار کل فرم، true/false
//     if (!form.checkValidity()) {
//       e.preventDefault(); // جلوگیری از ارسال فرم

//     } else {
//       alert("فرم با موفقیت ارسال شد!");
//     }
//   });

// });

//----------Part2---------
// requestSubmit(): متدی هست که باعث میشه فرم به شکل عادی و مثل کلیک روی دکمه سابمیت ارسال بشه (همه قوانین اعتبار سنجی اجرا میشن)

// const form = document.getElementById("form");
// const username1 = document.getElementById("username1");

// form.addEventListener("submit" , (e) =>{
//   e.preventDefault(); //جلوگیری از ارسال واقعی برای تست
//   alert("مقدار فرم ارسال شد:" + username1.value);
// });

// //دکمه ای که از submit() استفاده می کند
// document.getElementById("forceSubmit").addEventListener("click", 
//   () => {
//     form.onsubmit();
//     //هیچ اعتبارسنجی انجام نمی شود
//     //هیچ رویداد سابمیت اجرا نمی شود
// });

// // دکمه ای که از requestSubmit() استفاده می کند
// document.getElementById("requestSubmit").addEventListener("click" , 
//   () => {
//     form.requestSubmit();
//     //رویداد سابمیت اجرا می شود
//     //اعتبارسنجی انجام می شود
// });

//valueAsNumber: پراپرتی ایه که مقدار یک اینپوت عددی رو به جای متن،به صورت عدد برمیگردونه یا ست می کنه.


//-----Part3----
const form = document.getElementById("form1");
const ageInput = document.getElementById("age");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //جلوگیری از ارسال واقعی

  //مقایسه مقدارهای مختلف
  console.log("value:" , ageInput.value, typeof ageInput.value);
  console.log("valueAsNumber:", ageInput.valueAsNumber, typeof ageInput.valueAsNumber);  
  
})



