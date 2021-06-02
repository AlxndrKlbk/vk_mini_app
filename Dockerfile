FROM smizy/scikit-learn

ENV PYTHONPATH=/usr/src/app/ \
    FLASK_APP=main
WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN set -x \
    && apk update \
    ## word2vec/fasttext
    && apk --no-cache add \
    bash \
    libstdc++ \
    && apk --no-cache add --virtual .builddeps \
    build-base \
    git \
    openblas-dev \
    python3-dev \
    # # fastText
    # && git clone https://github.com/facebookresearch/fastText.git \
    # && cd fastText \
    # && make \
    # && mv fasttext /usr/local/bin/ \
    # && rm -rf .git \       
    # && cd .. \
    # ## word2vec
    # && git clone https://github.com/svn2github/word2vec.git \
    # && cd word2vec \
    # && make \
    # && mv word2vec /usr/local/bin/ \
    # && mv word2phrase /usr/local/bin/ \
    # && mv distance /usr/local/bin/ \
    # && mv word-analogy /usr/local/bin/ \
    # && mv compute-accuracy /usr/local/bin/ \
    # && rm -rf .git \
    # && cd .. \
    ## gensim
    && pip install cython gensim==3.8.3 \
    ## clean 
    && apk del  .builddeps \
    && rm -rf /root/.[acpw]* \
    ## установка других требований
    && pip install -r requirements.txt

EXPOSE 5000

CMD ["./start.sh"]
