import requests

# URL вашего API
api_url = "https://jsonplaceholder.typicode.com/albums/"


for i in range(1, 101):
    response = requests.get(api_url + str(i) + "/")
    data_to_post = response.json()
    requests.post('http://127.0.0.1:8000/api/album/', json=data_to_post)
    
    
