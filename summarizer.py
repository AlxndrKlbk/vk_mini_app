import re
from collections import Counter
import numpy as np
from queue import Queue
import copy
from gensim import summarization
import operator 
import pymorphy2

class Summarizer:

    split_words = re.compile(r'\s+')
    split_seq = re.compile(r'[.\n]+')
    delete_bad_patterns = re.compile(r'\[.*?\]')
        

    @staticmethod
    def summarize_in_str(text, ratio=None, word_count=None):
        
        if (ratio == None and word_count == None):
            raise Exception('Укажите ЧТО НИБУДЬ ИЗ ratio ИЛИ word_count')

        args_dict = {}
        if not word_count == None:
            args_dict["word_count"] = word_count
        if not ratio == None:
            args_dict["ratio"] = ratio

        text = Summarizer.delete_bad_patterns.sub('', text.encode().decode('utf-8'))

        try:
            output_text = summarization.summarize(text, **args_dict)
        except ValueError as ve:  
            print(str(ve))
            output_text = ''
        return output_text if output_text != '' else text.split('.')[0]


    #def __init__(self):
        #self.seq_count = seq_count
        #self.model = FastText.load_fasttext_format('cc.ru.300')

    @staticmethod
    def get_main_words( text, words_num=3):
        available_pos = ['NOUN', 'ADJF', 'ADJS', 'NUMR']
        non_standart = ['LATN', 'NUMB']
        morph = pymorphy2.MorphAnalyzer()
        #new_text = self.exclude_stop_words(text)
        to_return = [morph.parse(word)[0] for word in summarization.keywords(text, split=True, words=words_num)]
        return [word.word for word in to_return if (str(word.tag) in non_standart or word.tag.POS in available_pos) ]
