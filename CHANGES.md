# Zmiany

Cześć! Poniżej zamieszczam wszystkie zmiany, któ®ych dokonałem, wraz z ich uzasadnieniem.

## Setup projektu

1. Pierwsze co, to wprowadziłem plik .gitignore - standardowa praktyka, żeby nie commitować tego, czego nie potrzeba.
2. Dodałem prettiera oraz plik konfiguracyjny, żeby cały zespół miał spójny styl kodu. Tutaj trzeba było dodać również plugin do tailwinda oraz eslinta.
3. Dodałem również husky, żeby przed każdym commitem uruchamiał się lint-staged z lintem, prettierem oraz tscheck - to pomaga utrzymać jakość kodu.

## Zmiany w kodzie

4. W pierwszej kolejności zająłem się typami - dodawanie `any` jest antywzorcem. Moglibyśmy zastąpić to `unknown` natomiast tutaj sytuacja wydaje się jasna co do typów.
5. Mam taki sposób działania, że umieszczam typy w osobnym dir `/types`.
6. Zmieniłem tym samym nazwę initial state z `data` na `keywords`, bo samo `data` nie jest self-explanatory oraz dodałem stosowne typy: wszystkie pola są obowiązkowe, bo tak sugeruje mocked API.
7. (swoją drogą nie grzebałem wcale w mockedAPI, bo założyłem, że to jedynie imitacja API i mam refaktoryzować kod główny. Gdybym miał jednak coś zmienić, to na pewno dodałbym typy.)
8.
