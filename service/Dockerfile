FROM python:3.11

RUN apt-get update
RUN apt-get install -y --no-install-recommends

WORKDIR /app

ENV PYTHONPATH /app

COPY requirements.txt .
RUN pip install --trusted-host pypi.python.org --upgrade pip
RUN pip install --trusted-host pypi.python.org -r requirements.txt
RUN apt-get update && apt-get -y install cmake protobuf-compiler

COPY . .

RUN cd src &&  rm -rf build | echo "y" && mkdir build && cd build && cmake .. && make && cd .. && python3 trie.py

EXPOSE 7777


CMD ["python", "src/main.py"]