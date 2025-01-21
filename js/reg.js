// const form = document.getElementById("teamForm");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   // File upload handling
//   const file = formData.get("fileUpload");
//   const fileBase64 = await toBase64(file);

//   // Prepare data for submission
//   const data = {
//     teamName: formData.get("teamName"),
//     member1Name: formData.get("member1Name"),
//     member1Email: formData.get("member1Email"),
//     member2Name: formData.get("member2Name") || "",
//     member2Email: formData.get("member2Email") || "",
//     fileUrl: fileBase64,
//   };

//   // Replace with your Google Apps Script URL
//   const scriptURL = "https://script.google.com/macros/s/AKfycbwj7M1qB0PTpUAysa0Ij05UEJbcygmjhxFjJ2t42CNaU3Ad9T4If4OlCzTkiO17Pgoy/exec";

//   fetch(scriptURL, {
//     method: "POST",
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       alert(json.message);
//       form.reset();
//     })
//     .catch((error) => console.error("Error:", error));
// });

// // Helper function to convert file to Base64
// function toBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }




form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // File upload handling
  const file = formData.get("fileUpload");
  const fileBase64 = await toBase64(file);

  // Prepare data for submission
  const data = {
    teamName: formData.get("teamName"),
    member1Name: formData.get("member1Name"),
    member1Email: formData.get("member1Email"),
    member2Name: formData.get("member2Name") || "",
    member2Email: formData.get("member2Email") || "",
    fileName: file.name, // Send the file's name
    fileBase64: fileBase64, // Send the file content as Base64
  };

  // Replace with your Google Apps Script URL
  // const scriptURL = "https://script.google.com/macros/s/AKfycbwj7M1qB0PTpUAysa0Ij05UEJbcygmjhxFjJ2t42CNaU3Ad9T4If4OlCzTkiO17Pgoy/exec";

  const scriptURL = "https://script.google.com/macros/s/AKfycbwj7M1qB0PTpUAysa0Ij05UEJbcygmjhxFjJ2t42CNaU3Ad9T4If4OlCzTkiO17Pgoy/exec";
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.status === "success") {
        alert("Team registered successfully! File uploaded: " + json.fileUrl);
      } else {
        alert("Error: " + json.message);
      }
      form.reset();
    })
    .catch((error) => console.error("Error:", error));
});
