import os

# Update the image path to the correct location
image_path = "C:\\Users\\shiva\\Documents\\test.png"  # Path to your PNG image


# Check if the file exists at this path
if os.path.exists(image_path):
    print(f"File exists at {image_path}")
else:
    print(f"File not found at {image_path}")
