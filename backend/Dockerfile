# pull baselayer image from dockerhub
FROM python:3.9-slim

#set working directory for docker container
WORKDIR /backend

#install python dependencies specified in requirements.txt
COPY ./requirements.txt ./requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

#copy scripts (just app)
COPY ./app ./app

#run FastAPI Server
CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]