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
// const form = document.getElementById("form1");
// const ageInput = document.getElementById("age");

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //جلوگیری از ارسال واقعی

//   //مقایسه مقدارهای مختلف
//   console.log("value:" , ageInput.value, typeof ageInput.value);
//   console.log("valueAsNumber:", ageInput.valueAsNumber, typeof ageInput.valueAsNumber);  
  
// })


//----------Part 238: Serialize Form Data------

const form = document.getElementById("form2");
console.log(form.elements); //خروجی : Html Collection شبیه به آرایه

// Iterable(قابل پیمایش):  ساختاری که میشه روی عناصرش یکی یکی حلقه زد 
console.log([...form]); //تبدیل به آرایه شد

//FormData : یک آبجکت جاوااسکریپته که داده های فرم اچ تی ام ال رو جمع آوری می کنه(آماده سازی داده ها برای ارسال به سرور)
const formData = new FormData(form);
console.log(formData);
console.log([...formData]); //تبدیل به آرایه

fetch("/upload" , {
  method: "POST",
  headers: {
    "Content-Type": "multipart/form-data"
    //نباید این رو دستی وارد کنیم و مرورگر خودش باوندری رو اضافه می کند
    //boundary: خط جداکننده بین بخشهای مختلف فرم  که مرورگر خودش می سازه
  },
  body:formData
})
.then(response => response.text()) //تبدیل مقدار برگشتی به یک متن ساده قابل استفاده
.then(data => console.log("سرور جواب داد:", data))
.catch(error => console.error("خطا:", error));

//در مرحله بعد باید مقادیر تبدیل به استرینگ شوند تا بتوانیم کنار هم قرار بدهیم که نهایتا تبدیل به ساختار UrlEncoded 



