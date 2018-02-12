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

## Spezielle Folien

Es stehen bislang die folgenden dynamischen Folien zur Verfügung:

- Nächster Termin
- Feinstaub-Messwert

### Nächster Termin

![image](https://user-images.githubusercontent.com/273727/35833680-6fb6a73e-0ad2-11e8-910a-1c922debbbc8.png)

Mit dieser Folie wird der nächste Termin in einem iCal-Kalender angezeigt.

### Feinstaub-Messwert

![image](https://user-images.githubusercontent.com/273727/36097363-f4f5c682-0ffa-11e8-9ac4-f2e9df5348a3.png)

Diese Folie zeigt den letzten Messwert eines [luftdaten.info](http://luftdaten.info)
Feinstaub-Sensors an.
