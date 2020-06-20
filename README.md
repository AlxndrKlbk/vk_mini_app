﻿# Burn_it

## О приложении

Серверное приложение, которого не должно было существовать, но что то пошло не так.
В качестве сервера выступает Flask.

В качестве алгоритма сжатия текста используется реализация суммаризатора от [gensim](https://radimrehurek.com/gensim/summarization/summariser.html)

## Описание API

Сервер принимает запросы в json-формате с следующей структурой:

```
{
    "params": [
        {
            "text": "Национальные вооружённые силы Латвии состоят из регулярных сил, территориальных сил (национальной гвардии) и резерва НВС. В военное время или при чрезвычайном положении в подчинение НВС должны войти Управление безопасности Банка Латвии и Государственная пограничная служба Латвии. ",
            "ratio": 0.5
        },
        {
            "text" : "В природе и в нашей жизни простые числа используются повсюду: цикады выстраивают по ним свои жизненные циклы, часовщики применяют их для вычисления тиканья, а в авиационных двигателях с их помощью балансируется частота воздушных импульсов. Однако все эти области применения бледнеют на фоне факта, знакомого каждому криптографу: простые числа находятся в самом сердце современной компьютерной безопасности, то есть они напрямую несут ответственность за защиту всего. Видите замок в адресной строке браузера? Да, это значит, что используется двухключевое «рукопожатие», основанное на простых числах. Как защищается при покупках ваша кредитная карта? Тоже при помощи криптографии на основе простых чисел.",
            "word_count" : 40
        },
        {
            "text": "Специалисты компании Emsisoft выпустили бесплатную утилиту для дешифровки данных, пострадавших после атак шифровальщика STOP.
            Напомню, что STOP является одним из наиболее активных семейств вымогателей в настоящее время, а для его распространения в основном используются рекламные бандлы и подозрительные сайты с  фейковыми кряками и активаторами.
            Emsisoft считает STOP главной угрозой среди вымогателей за последние шесть месяцев (второй и третий кварталы 2019 года). По информации компании, от атак STOP уже пострадали более 116 000 подтвержденных жертв, а общее число пострадавших оценивается примерно в 460 000 человек.",
            "word_count": 10
        },
        {
            "text": "В настоящее время Авиньон служит центром управления департаментом, местопребыванием архиепископа; в нём находятся лицей, высшая и низшая богословская семинарии, ремесленная, рисовальная и музыкальная школы, Воклюзская академия, ботанический сад, музей, прозванный по имени своего основателя, врача Кальве (Calvet), с картинной галереей, археологической коллекцией и галереей образцов скульптурных и архитектурных древностей средних веков и нового времени, кроме того, портретная галерея, коллекция монет и кабинет редкостей, публичная библиотека из 85 тысяч томов и 2500 рукописей, естественнонаучный музей «Рекен» (Requin) с большой библиотекой, общество земледелия и садоводства и общество любителей искусств. Основанный в 1303 году университет был закрыт в 1794 году С 1857 году в городе находятся протестантская церковь и школа.",
            "ratio": 0.3,
            "word_count": 20
        }
    ]
}
```
Где text (обязательное поле) - текст, который необходимо форматировать, ratio - число от 0 до 1, обозначающее долю количества предложении от исходного текста в тексте на выходе, word_count - количество слов, которое необходимо оставить в тексте на выходе.

Ответ выдается в следующем виде
```
[
  {
    "result_text": "Национальные вооружённые силы Латвии состоят из регулярных сил, территориальных сил (национальной гвардии) и резерва НВС",
    "keywords": "латвии\nсил\nнвс\nнациональнои\nвремя"
  },
  {
    "result_text": "Когда проснулся в воскресенье после тусы и понял, что ты супер сладкий пончик",
    "keywords": "после\nсладкии\nкогда проснулся\nпонял"
  },
  {
    "result_text": "В настоящее время Авиньон служит центром управления департаментом, местопребыванием архиепископа; в нём находятся лицей, высшая и низшая богословская семинарии, ремесленная, рисовальная и музыкальная школы, Воклюзская академия, ботанический сад, музей, прозванный по имени своего основателя, врача Кальве (Calvet), с картинной галереей, археологической коллекцией и галереей образцов скульптурных и архитектурных древностей средних веков и нового времени, кроме того, портретная галерея, коллекция монет и кабинет редкостей, публичная библиотека из 85 тысяч томов и 2500 рукописей, естественнонаучный музей «Рекен» (Requin) с большой библиотекой, общество земледелия и садоводства и общество любителей искусств",
    "keywords": "находятся\nмузеи\nгалерееи\nобщество\nсредних"
  }
]
```