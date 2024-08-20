from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/data')
def get_data():
    # This would be where you handle your data logic
    return jsonify({"message": "Hello from the server!"})

if __name__ == '__main__':
    app.run(debug=True)
