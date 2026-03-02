from flask import Flask
from controller.leitura_controller import leitura_bp
from config import Config

def create_app():
    app = Flask(__name__)

    # registra as rotas
    app.register_blueprint(leitura_bp)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host=Config.HOST, port=Config.PORT)