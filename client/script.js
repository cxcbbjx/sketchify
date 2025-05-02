document.getElementById("uploadBtn").addEventListener("click", async () => {
  const input = document.getElementById("imageInput");
  const loading = document.getElementById("loading");
  const sketchImg = document.getElementById("sketchImage");

  if (!input.files[0]) {
    alert("Please select an image.");
    return;
  }

  const formData = new FormData();
  formData.append("image", input.files[0]);

  loading.classList.remove("hidden");
  sketchImg.classList.add("hidden");

  try {
    const response = await fetch("http://localhost:5000/transform", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    const blob = await response.blob();
    const imageURL = URL.createObjectURL(blob);
    sketchImg.src = imageURL;
    sketchImg.classList.remove("hidden");
  } catch (error) {
    console.error("Error uploading image:", error);
    alert("Something went wrong.");
  } finally {
    loading.classList.add("hidden");
  }
});
