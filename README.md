# schaufenster-html

HTML-Seiten zur Darstellung auf unserem Schaufenster-Monitor

## So funktioniert's

Die Seiten im Verzeichnis `docs/` werden mit Github Pages automatisch
[veröffentlicht](https://gruene-roesrath.github.io/schaufenster-html/).

Auf dem Monitor läuft ein Browser im Vollbild-Modus und zeigt die
entsprechende Seite an.

Im HTML sind die einzelnen Seiten als `<div class="container"></div>`
angelegt. Diese werden nacheinander in Endlosschleife angezeigt.

## Seitenlayouts

Das Layout ist starr auf HD-Bildschirme mit 1920x1080 Pixeln ausgelegt.

Geplant ist, ein paar einfache, wiederverwendbare Standard-Layouts für
Seiten/Folien zu haben. Hier sind zwei Beispiele.

### Mittiger Inhalt

Der Inhalt erscheint horizontal und vertikal zentriert.

```html
<div class="container">
  <div class="inner centered">
    <h3>Wir haben den</h3>
    <h1 class="caps balken">
      MUT ZUR<br>MITTE
    </h1>
  </div>
</div>
```

### Bild

Das Bild wird auf die gesamte Fläche skaliert.

```html
<div class="container image">
  <img src="img/folge-uns-auf-facebook.png">
</div>
```
