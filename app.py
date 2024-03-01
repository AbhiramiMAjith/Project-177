from flask import Flask, jsonify, render_template, request
import random

app = Flask(__name__)

words = [
    {
        "inputs" : 5,
        "category" : "Food item",
        "word" : "bread"
    },
    {
        "inputs" : 6,
        "category" : "Book name",
        "word" : "hobbit"
    },
    {
        "inputs" : 6,
        "category" : "Anime",
        "word" : "bleach"
    },
    {
        "inputs" : 5,
        "category" : "Country in Asia",
        "word" : "china"
    },
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get-template")
def get_template():
    return jsonify({
        "status" : "success",
        "word" : random.choice(words)
    })

if __name__ == "__main__":
    app.run(debug = True)