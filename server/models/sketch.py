import os
import cv2
import torch
import numpy as np
from PIL import Image
from diffusers import ControlNetModel, StableDiffusionControlNetPipeline
from diffusers import UniPCMultistepScheduler
from utils.file_handler import get_processed_path

# --- 1) Model Setup (runs once) --- #
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# Load Canny‑guided ControlNet
controlnet = ControlNetModel.from_pretrained(
    "lllyasviel/sd-controlnet-canny", torch_dtype=torch.float16 if DEVICE=="cuda" else torch.float32
)
# Use the standard Stable Diffusion v1.5
pipe = StableDiffusionControlNetPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    controlnet=controlnet,
    safety_checker=None,
    torch_dtype=torch.float16 if DEVICE=="cuda" else torch.float32
)
# Scheduler & optimizations
pipe.scheduler = UniPCMultistepScheduler.from_config(pipe.scheduler.config)
pipe.enable_model_cpu_offload()   # offload to CPU if needed
pipe.enable_attention_slicing()   # save VRAM/CPU RAM
pipe.to(DEVICE)


def generate_sketch(image_file):
    """
    1) Read & preprocess image → Canny edges
    2) Run ControlNet → pencil‑style sketch
    3) Save & return path
    """
    # Save upload to disk
    saved_input = get_processed_path("input.jpg")  # reuse get_processed_path
    with open(saved_input, "wb") as f:
        f.write(image_file.read())

    # 1) Load & Canny edge detect
    img = cv2.imread(saved_input)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 100, 200)
    # Convert edges to 3‑channel PIL
    pil_edges = Image.fromarray(edges).convert("RGB").resize((512,512))

    # 2) Run the ControlNet pipeline
    prompt = "a realistic pencil sketch, black and white, hand‑drawn style, finely detailed"
    result = pipe(
        prompt=prompt,
        image=pil_edges,
        strength=1.0,           # full reliance on edges
        guidance_scale=7.5,
        num_inference_steps=30
    )
    sketch_img = result.images[0].convert("L")  # to B&W

    # 3) Save output
    out_path = get_processed_path("sketch.png")
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    sketch_img.save(out_path)

    return out_path
