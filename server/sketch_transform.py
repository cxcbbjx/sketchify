import cv2
import numpy as np

def generate_sketch(input_path, output_path):
    # Read image from file path
    image = cv2.imread(input_path)

    if image is None:
        raise ValueError("Image not loaded correctly. Check file path.")

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    inv = 255 - gray
    blur = cv2.GaussianBlur(inv, (21, 21), 0)
    sketch = cv2.divide(gray, 255 - blur, scale=256)

    # Save the result
    cv2.imwrite(output_path, sketch)
