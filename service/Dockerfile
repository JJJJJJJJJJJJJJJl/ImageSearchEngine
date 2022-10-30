FROM python:3.10

RUN apt-get update
RUN apt-get install -y --no-install-recommends

WORKDIR /app

ENV PYTHONPATH /app

COPY requirements.txt .
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 7777

CMD ["python3", "src/main.py"]