from flask import render_template, Blueprint, session

views = Blueprint('views', __name__)


@views.route('/')
@views.route('/home')
def home():
    # sostituire variabili al posto degli 0
    percarrivo = 50
    numpass = 0
    numtick = 0
    return render_template('home.html', percentualeArrivo=percarrivo, numpasseggeri=numpass, numticket=numtick)
