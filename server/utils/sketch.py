import cv2
import numpy as np
from PIL import Image
import io
from utils.file_handler import get_processed_path

def generate_sketch(uploaded_file):
    image = Image.open(uploaded_file).convert("RGB")
    img = np.array(image)

    gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
    inv = 255 - gray
    blur = cv2.GaussianBlur(inv, (21, 21), 0)
    sketch = cv2.divide(gray, 255 - blur, scale=256)

    sketch_colored = cv2.cvtColor(sketch, cv2.COLOR_GRAY2RGB)

    output_path = get_processed_path()
    cv2.imwrite(output_path, sketch_colored)

    return output_path
