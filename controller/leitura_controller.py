from flask import Blueprint, request, jsonify
from service.leitura_service import processar_leitura

leitura_bp = Blueprint("leitura", __name__)

@leitura_bp.route("/dados", methods=["POST"])
def receber_dados():
    dados = request.json

    print("📥 JSON recebido:", dados)

    try:
        processar_leitura(dados)
        return jsonify({"status": "ok"}), 200

    except ValueError as e:
        return jsonify({"erro": str(e)}), 400

    except Exception:
        return jsonify({"erro": "Erro interno"}), 500
