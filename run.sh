#/bin/bash

docker build -t testreact -f ./dockerfiles/build/Dockerfile . && docker run --rm -it -p 5000:5000  -t testreact  
