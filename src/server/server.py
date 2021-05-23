import pyrebase,flask,json

firebase_config = {
    'apiKey': "AIzaSyCZjGlRKSajbVwwIp1gnsuEiISnA-9sn2U",
    'databaseURL':'',
    'authDomain': "epicsfinal.firebaseapp.com",
    'projectId': "epicsfinal",
    'storageBucket': "epicsfinal.appspot.com",
    'messagingSenderId': "871316201787",
    'appId': "1:871316201787:web:7aac406cc234cc5bd2571e",
    'measurementId': "G-MCS7P04T27"
}

app=flask.Flask(__name__)

if __name__=='__main__':
    @app.route('/signup/',methods=['POST'])
    def signup():
        json=flask.request.get_json(force=True)
        print('request data: ',json)
        print('signing up...')
        resp={'name':'shayak'}
        return 'this'
    app.run(debug=True)