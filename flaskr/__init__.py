from flask import Flask, render_template, session


def create_app():
    app = Flask(__name__)

    from .Routes import views

    app.register_blueprint(views, url_prefix='/')

    return app
