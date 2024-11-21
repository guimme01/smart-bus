from typing import cast
from urllib import request

from flask import Flask
from flask_mqtt import Mqtt

from main import app

mqtt = Mqtt(app)


@mqtt.on_connect()
def handle_connect(client, userdata, flags, rc):
    print("Attempting to connect to MQTT broker...")
    print(f"Connection status: {rc}")  # Print the return code

    if rc == 0:
        print("Successfully connected to MQTT broker.")
        mqtt.subscribe('smart_bus/topic')  # Subscribe to topic
        print("Subscribed to topic: smart_bus/topic")
    else:
        print(f"Failed to connect with return code {rc}")



@mqtt.on_message()
def handle_mqtt_message(client, userdata, message):
    print(f"Messaggio ricevuto sul topic {message.topic}: {message.payload.decode()}")


@app.route('/publish', methods=['POST'])
def publish_message():
    data = cast(dict, request.get_json())
    topic = data.get('topic')
    payload = data.get('message')
    mqtt.publish(topic, payload)  # Pubblica sul broker
    return {"status": "Messaggio pubblicato!"}, 200
