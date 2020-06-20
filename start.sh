#!/bin/bash
main_env/bin/gunicorn -w 4 --bind 0.0.0.0:5000 wsgi:app
