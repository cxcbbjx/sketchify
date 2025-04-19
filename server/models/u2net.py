import os
from config import OUTPUT_DIR
import cv2
import numpy as np
import torch
from PIL import Image
from u2net_test import inference  # Assuming you have this file from U^2-Net repo

def generate_sketch(image_path):
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)

    # Load and preprocess the image
    image = Image.open(image_path).convert("RGB")
    
    # Run U^2-Net inference
    output_path = os.path.join(OUTPUT_DIR, os.path.basename(image_path))
    output_path = output_path.replace('.jpg', '_sketch.png').replace('.jpeg', '_sketch.png').replace('.png', '_sketch.png')

    inference(image_path, output_path)  # This should call your real model

    return output_path
