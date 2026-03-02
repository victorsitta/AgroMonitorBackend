from collections import deque
from repository.leitura_repository import salvar_leitura


class processar_leitura:

    def __init__(self, leituras_buffer =5):                             # Buffer para armazenar as últimas leituras (máximo 5), ao definirmos o tamanho, 
        self.buffer = deque(maxlen=leituras_buffer)                     # hora que encher, ele vai começar a remover o mais antigo para adicionar o novo
        self.campos_obrigatorios= ["SOJA", "FEIJAO", "MILHO", "TRIGO"]
                                                                        


    def executar(self, dados):
        print("\n📥 NOVA LEITURA RECEBIDA") # INDICA LEITURA RECEBIDA
        print("Dados:", dados) 

        for campo in self.campos_obrigatorios:
            if campo not in dados:
                raise ValueError(f"Campo '{campo}' é obrigatório")
            
        # converte valores para float e validar
        try: 
            # o k pega cada elemento de self.campos_obrigatorios a CHAVE
            # o dados[k] pega cada valor usando a chave k, ou seja, pega o valor correspondente a cada campo obrigatório
            # o float() converte esse valor para número decimal
            # e o resultado é um dicionário onde as chaves são os nomes dos campos e os valores são os números convertidos
            valores = {k: float(dados[k]) for k in self.campos_obrigatorios}

        except ValueError as e:
            raise ValueError("Todos os valores devem ser numéricos")
        
        self.validar_leitura(valores) # VALIDA OS VALORES DE CADA CULTURA, SE ESTIVER FORA DO LIMITE LEVANTA EXCEÇÃO
        
        #Adiciona no buffer
        self.buffer.append((valores["SOJA"], valores["FEIJAO"], valores["MILHO"], valores["TRIGO"])) 
        print(f"Buffer atual: {len(self.buffer)}")
        
        # só salva quando tiver 5
        if(len(self.buffer) == 5):
            self.calcular_media_movel()
            
            
    def validar_leitura(self, valores):
        soja = valores["SOJA"]
        feijao = valores["FEIJAO"]
        milho = valores["MILHO"]
        trigo = valores["TRIGO"]

        if not (20.0 <= soja <= 35.0):
            raise ValueError("Soja fora do limite (20 - 35)")

        if not (25.0 <= feijao <= 40.0):
            raise ValueError("Feijão fora do limite (25 - 40)")

        if not (15.0 <= milho <= 30.0):
            raise ValueError("Milho fora do limite (15 - 30)")

        if not (30.0 <= trigo <= 50.0):
            raise ValueError("Trigo fora do limite (30 - 50)")


    def calcular_media_movel(self):

        soma_soja = sum(l[0] for l in self.buffer) # pega o primeiro elemento de cada tupla (soja) e soma
        soma_feijao = sum(l[1] for l in self.buffer) # pega o segundo elemento de cada tupla (feijao) e soma
        soma_milho = sum(l[2] for l in self.buffer) # pega o terceiro elemento de cada tupla (milho) e soma
        soma_trigo = sum(l[3] for l in self.buffer) # pega o quarto elemento de cada tupla (trigo) e soma

        media_soja = soma_soja / 5
        media_feijao = soma_feijao / 5
        media_milho = soma_milho / 5
        media_trigo = soma_trigo / 5

        print("\n==============================")
        print("🔥 SALVANDO MÉDIA NO BANCO 🔥")
        print("Soja:", media_soja)
        print("Feijao:", media_feijao)
        print("Milho:", media_milho)
        print("Trigo:", media_trigo)
        print("==============================\n")

        #salva somente a média
        salvar_leitura(media_soja, media_feijao, media_milho, media_trigo)
        

    

        