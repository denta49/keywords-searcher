# Zmiany

Cześć! Poniżej zamieszczam wszystkie zmiany, któ®ych dokonałem, wraz z ich uzasadnieniem.

## Setup projektu

1. Pierwsze co, to wprowadziłem plik .gitignore - standardowa praktyka, żeby nie commitować tego, czego nie potrzeba.
2. Dodałem prettiera oraz plik konfiguracyjny, żeby cały zespół miał spójny styl kodu. Tutaj trzeba było dodać również
   plugin do tailwinda oraz eslinta.
3. Dodałem również husky, żeby przed każdym commitem uruchamiał się lint-staged z lintem, prettierem oraz tscheck - to
   pomaga utrzymać jakość kodu.

## Pierwsze w kodzie

4. W pierwszej kolejności zająłem się typami - dodawanie `any` jest antywzorcem. Moglibyśmy zastąpić to `unknown`
   natomiast tutaj sytuacja wydaje się jasna co do typów.
5. Mam taki sposób działania, że umieszczam typy w osobnym dir `/types`. Tyczy się to elementów wielokrotnie używanych w
   projekcie bądź tych przylatujących z API. Jeżeli mamy propsy jednego komponentu, z punktu widzenia DX umieszam je w
   kodzie komponentu.
6. Zmieniłem tym samym nazwę initial state z `data` na `keywords`, bo samo `data` nie jest self-explanatory oraz dodałem
   stosowne typy: wszystkie pola są obowiązkowe, bo tak sugeruje mocked API.
7. (swoją drogą nie grzebałem wcale w mockedAPI, bo założyłem, że to jedynie imitacja API i mam refaktoryzować kod
   główny. Gdybym miał jednak coś zmienić, to na pewno dodałbym typy.)
8. Ponieważ miałem już najważniejszy typ zdefiniowany, przeszedłem do code splittingu.

## Code splitting

9. W pierwszej kolejności uznałem, że trzeba rozbroić LegacyTable.tsx - komponent jest zbyt duży, zawiera w sobie de
   facto różne komponenty, style i logikę. Uważam, że rozdzielanie logiki od UJ jest dobrym wzorcem w React.
10. Komponenty umieszczam w folderze /components. Możnaby zastosować atomic design, ale tutaj uznałem, że to overkill.
    Jednocześnie możnaby użyć StyledComponents lub trzymać style w osobnych plikach (w myśl rozdzielania UI i logiki),
    natomiast co ważne, tutaj mamy tailwinda, więc style są wbudowane w JSX - to swoją drogą też wymagało refactoru, bo
    mamy i tailwinda i zwykłe style inlinowe, co jest antypatternem i zdecydowałem, że wszystkie style zostaną zmienione
    na tailwindowe.
11. W ten sposób powstały następujące komponenty:
12. TableHeader.tsx;
13. TableInput.tsx;
14. TableRow.tsx; - to komponent agnostyczny (taki powinen być - nie powienen "wiedzieć" co renderuje, dlatego
    jedynie przyjmuje komponent do wyrenderowania, wrapuje w style i renderuje - wzorzec HOC).
15. KeywordRow.tsx - łączy poniższe i jest rendoerowany przez powyższy.
16. KeywordName.tsx;
17. KeywordStatus.tsx;
18. KeywordValue.tsx - rozdzieliłem te trzy rzeczy. To może być lekki
    overkill, ale uważam, że nie powinniśmy mimo wszystko w TableRow.tsx trzymać logiki wyświetlania keywordu. Row
    powinien być agnostyczny, do niego po prostu wrzucamy content a nie trzymamy logiki tego, co ma być wyświetlane,
    dlatego zrobiłem trzy komponenty.
19. Na tym zakończyłem basic code-splitting.

## Refaktoryzacja styli
