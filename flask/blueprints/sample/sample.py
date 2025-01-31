from flask import Blueprint, request

sample = Blueprint("sample", __name__, template_folder="templates")

@sample.route("/", methods=["POST", "GET"])
def index():
    return "Sample Route!"