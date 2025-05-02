from flask import Blueprint, request, send_file
from utils.sketch import generate_sketch

transform_bp = Blueprint('transform', __name__)

@transform_bp.route('/transform', methods=['POST'])
def transform_image():
    if 'image' not in request.files:
        return "No image uploaded", 400

    image = request.files['image']
    processed_path = generate_sketch(image)
    return send_file(processed_path, mimetype='image/png')
