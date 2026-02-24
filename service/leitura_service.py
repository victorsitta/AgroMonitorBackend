from repository.leitura_repository import salvar_leitura

def processar_leitura(dados):

    campos_obrigatorios = ["SOJA", "FEIJAO", "MILHO", "TRIGO"]

    for campo in campos_obrigatorios:
        if campo not in dados:
            raise ValueError(f"Campo '{campo}' é obrigatório")

    
    try:
        soja = float(dados["SOJA"])
        feijao = float(dados["FEIJAO"])
        milho = float(dados["MILHO"])
        trigo = float(dados["TRIGO"])
    except:
        raise ValueError("Todos os valores devem ser numéricos")
    
    
    def validar_leitura(soja, feijao, milho, trigo):
        
        if not (20.0 <= soja <= 35.0):
            raise ValueError("Soja fora do limite (20 - 35)")

        if not (25.0 <= feijao <= 40.0):
            raise ValueError("Feijão fora do limite (25 - 40)")

        if not (15.0 <= milho <= 30.0):
            raise ValueError("Milho fora do limite (15 - 30)")

        if not (30.0 <= trigo <= 50.0):
            raise ValueError("Trigo fora do limite (30 - 50)")
    

    validar_leitura(soja, feijao, milho, trigo)
    salvar_leitura(soja, feijao, milho, trigo)



        