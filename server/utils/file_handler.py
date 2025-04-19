import os
import uuid

def get_processed_path(filename="processed.png"):
    base = "temp_outputs"
    os.makedirs(base, exist_ok=True)
    return os.path.join(base, f"{uuid.uuid4().hex}_{filename}")
