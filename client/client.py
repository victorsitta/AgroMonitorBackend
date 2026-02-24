import requests
import random
import time

# URL do seu servidor Flask
URL = "http://localhost:5000/dados"

def gerar_dados():
    return {
        "SOJA": round(random.uniform(20, 35), 2),
        "FEIJAO": round(random.uniform(25, 40), 2),
        "MILHO": round(random.uniform(15, 30), 2),
        "TRIGO": round(random.uniform(30, 50), 2)
    }

def enviar_dados():
    dados = gerar_dados()

    try:
        resposta = requests.post(URL, json=dados)
        print("📤 Enviado:", dados)
        print("📥 Status:", resposta.status_code)
        print("📥 Resposta:", resposta.json())
        print("-" * 40)

    except Exception as e:
        print("Erro ao enviar:", e)

if __name__ == "__main__": 
    while True:
        enviar_dados()
        time.sleep(5)  # envia a cada 5 segundos