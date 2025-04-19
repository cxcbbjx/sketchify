const form = document.querySelector('#upload-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fileInput = document.querySelector('input[type="file"]');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  // Make the fetch request to the Flask backend
  fetch("http://127.0.0.1:5000/upload", {  // <-- Correct URL with HTTP and port
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.blob();
    })
    .then((data) => {
      const imageUrl = URL.createObjectURL(data);
      document.querySelector('#output-image').src = imageUrl;
    })
    .catch((error) => {
      console.error("Error during upload:", error);
    });
});
