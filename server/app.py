from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import cv2
import uuid

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
SKETCH_FOLDER = 'sketches'

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(SKETCH_FOLDER, exist_ok=True)

def generate_sketch(image_path, output_path):
    image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    inverted = cv2.bitwise_not(image)
    blurred = cv2.GaussianBlur(inverted, (21, 21), 0)
    inverted_blur = cv2.bitwise_not(blurred)
    sketch = cv2.divide(image, inverted_blur, scale=256.0)
    cv2.imwrite(output_path, sketch)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save uploaded file
    filename = f"{uuid.uuid4().hex}.png"
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    # Generate sketch
    sketch_path = os.path.join(SKETCH_FOLDER, filename)
    generate_sketch(file_path, sketch_path)

    return jsonify({'sketch_path': f"sketches/{filename}"})

@app.route('/sketches/<filename>')
def serve_sketch(filename):
    return send_from_directory(SKETCH_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
