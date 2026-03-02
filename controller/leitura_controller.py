from flask import Blueprint, request, jsonify
from service.leitura_service import processar_leitura


leitura_bp = Blueprint("leitura", __name__)    # Cria um Blueprint para as rotas de leitura
processador = processar_leitura()


@leitura_bp.route("/dados", methods=["POST"]) # Define a rota para receber os dados JSON via POST
def receber_dados():
    dados = request.json

    print("📥 JSON recebido:", dados)

    try:
        processador.executar(dados)
        return jsonify({"status": "ok"}), 200

    except ValueError as e:
        return jsonify({"erro": str(e)}), 400

    except Exception:
        return jsonify({"erro": "Erro interno"}), 500
