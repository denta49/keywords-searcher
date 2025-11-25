# Zmiany

Cześć! Poniżej zamieszczam wszystkie zmiany, któ®ych dokonałem, wraz z ich uzasadnieniem.

## Setup projektu

1. Pierwsze co, to wprowadziłem plik .gitignore - standardowa praktyka, żeby nie commitować tego, czego nie potrzeba.
2. Dodałem prettiera oraz plik konfiguracyjny, żeby cały zespół miał spójny styl kodu. Tutaj trzeba było dodać również plugin do tailwinda oraz eslinta.
3. Dodałem również husky, żeby przed każdym commitem uruchamiał się lint-staged z lintem, prettierem oraz tscheck - to pomaga utrzymać jakość kodu.
