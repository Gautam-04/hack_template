from flask import Flask
from dotenv import load_dotenv
from flask_cors import CORS
import os

load_dotenv()

# ENV Vars
PORT = os.environ['PORT']

# Blueprints
from blueprints.sample.sample import sample
from blueprints.LLMTemplate.LLMTemplate import LLMTemplate

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024  # 50 MB
# CORS(app)
# CORS(app, origins=["http://localhost:5173"])
CORS(app,supports_credentials=True)

app.register_blueprint(sample, url_prefix="/v1/sample")
app.register_blueprint(LLMTemplate, url_prefix="/v1/llm")

if __name__ == "__main__":
    app.run(port=PORT, debug=False)