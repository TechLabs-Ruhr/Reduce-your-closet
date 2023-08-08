# pull baselayer image from dockerhub
FROM python:3.9

#set working directory for docker container
WORKDIR /backend

#install python dependencies specified in requirements.txt
COPY ./requirements.txt /backend/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /backend/requirements.txt

#copy scripts
COPY . /backend

#run FastAPI Server
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]