from flask import render_template, Blueprint, request

views = Blueprint('views', __name__)

numpass = 0
data = 0


@views.route('/')
@views.route('/home')
def home():
    percarrivo = 50
    numtick = 0
    return render_template('home.html', percentualeArrivo=percarrivo, numpasseggeri=numpass, numticket=numtick)


@views.route("/laserAction", methods=["GET", "POST"])
def handle_post():
    global numpass, data
    if request.is_json:
        data = request.json
        numpass += 1

    return render_template('home.html', numpasseggeri=numpass)
