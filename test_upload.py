import requests

# Change this to the actual path where your image is saved
image_path = "C:/ai-ghibli/test.jpg"

url = "http://localhost:5000/api/transform/"
files = {'image': open(image_path, 'rb')}

response = requests.post(url, files=files)

print("Status:", response.status_code)
print("Response:", response.json())
