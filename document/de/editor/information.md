
# Information
Die Einstellung der Grunddaten eines Elements (ID, Name, Beschreibungstext, Symbol und Farbe)
- Das sind die Felder der Grunddaten, die allen Elementen einer Welt gemeinsam sind (Kategorie, Aktion, Gegenstand, Gruppe, Ereignis, Fähigkeit und Voreinstellung).
- Sie werden für jedes Element einzeln eingestellt.
___

## Kennungs-ID
Die eindeutige ID, die das Element bezeichnet
- Das ist die ID, die jedes Element eindeutig bezeichnet.
- Es ist die Zeichenkette, an der der Editor das Element erkennt.
- Zum Beispiel wird über die ID angegeben, welcher Gegenstand beim Abschluss einer Aktion erhalten wird.
- Verwendbar ist eine Kombination aus Buchstaben, Bindestrichen und Ziffern, von 1 bis 100 Zeichen.

!> Ändere eine einmal eingestellte ID nicht mehr, sobald du das Spiel verteilt hast. Änderst du sie, passt sie nicht mehr zu den vorhandenen Spieldaten und das Spiel läuft nicht mehr richtig.
___

### Der angezeigte Name
Der Anzeigename, der automatisch aus der ID erzeugt wird
- Ist kein Name eingestellt, werden die Bindestriche durch Leerzeichen ersetzt und jedes Wort mit großem Anfangsbuchstaben und kleinem Rest als Name angezeigt.
- Auch wenn die ID Großbuchstaben enthält, wird alles außer dem Anfangsbuchstaben in Kleinbuchstaben umgewandelt.
- Für andere Sprachen als Englisch musst du das Feld Name einzeln einstellen.
___

#### Beispiel
Ein konkretes Beispiel für die Umwandlung einer ID
- Ist die ID `stylish-strong-axe`, lautet der Name `Stylish Strong Axe`.
- Ist die ID `stylish-STRONG-axe`, lautet er ebenfalls `Stylish Strong Axe`.
___

### Nicht doppelt vorkommen
Verbot doppelter IDs innerhalb desselben Typs
- Da sie der Unterscheidung der Elemente dient, vergib sie innerhalb der Typen Kategorie, Aktion, Gegenstand, Gruppe, Ereignis, Fähigkeit und Voreinstellung nicht doppelt.
- Ereignisse fassen Aufgaben, Änderungsereignisse und feste Ereignisse zu einem Typ zusammen, vergib sie also auch unter diesen nicht doppelt.
- Dieselbe ID in verschiedenen Typen ist kein Problem.
- Eine Welt mit Doppelungen führt bei der Prüfung zu einem Fehler.
- [_type_](de/editor/type)
___

## Name
Der angezeigte Name des Elements
- Das ist der Name des Elements, der im Spiel angezeigt wird.
- Du kannst auch andere Sprachen als Englisch eingeben.
- Ein Name, der mit dem eines anderen Elements übereinstimmt, ist in Ordnung.
- Es lassen sich bis zu 20 Zeichen eingeben.
- Passt er nicht in die Anzeigebreite, wird der überstehende Teil mit `…` abgekürzt.
___

### Automatische Umwandlung aus der ID
Die Funktion, die den Namen automatisch aus der ID erzeugt
- Bleibt es leer, wird er automatisch anhand der ID angezeigt. Einzelheiten stehen im vorigen Abschnitt.
___

## Beschreibungstext
Die ausführliche Beschreibung des Elements
- Das ist der Beschreibungstext des Elements, der im Spiel angezeigt wird.
- Du kannst auch andere Sprachen als Englisch eingeben. Auch ein langer Text wird vollständig angezeigt.
- Gibt es keine Beschreibung, lasse es leer.
___

## Symbol
Die Einstellung des Symbols, das das Element darstellt
- Als Symbol lässt sich ein Bild, Iconify oder ein Emoji einstellen.
- Iconify ist ein Dienst, der Symbole der verschiedensten Art bereitstellt.
- Stellst du mehrere davon ein, werden sie in der Reihenfolge Bild, Iconify, Emoji bevorzugt angezeigt.
___

### Bild
Eine beliebige Bilddatei verwenden
- Das ist das Bild, das das Element darstellt.
- Beim Einlesen wird es automatisch auf höchstens 60×60 Pixel verkleinert und neu komprimiert.
- Hast du Iconify oder ein Emoji eingestellt, ist es nicht nötig.
___

#### Dateiarten
Die unterstützten Bilddateiformate
- Verwendbar sind die gängigen Arten, die ein Browser anzeigen kann.
- JPEG, PNG, GIF, WebP, SVG und Ähnliches.
- GIF und AVIF werden in PNG umgewandelt. JPEG und WebP werden unter Beibehaltung ihres ursprünglichen Formats verkleinert.
- SVG wird ohne Verkleinerung unverändert eingebettet, vermeide daher große Dateien.
___

### Iconify
Die Verwendung der Iconify-Symbolsätze
- Das ist das Symbol, das das Element darstellt.
- Hast du ein Bild eingestellt, wird dieses bevorzugt angezeigt.
___

#### Wie man ein Symbol findet
Wie man bei Iconify ein Symbol auswählt
- Suche die anzeigbaren Symbole bei `Iconify`.
- Über die Symbolsuche findest du sofort das passendste Symbol.
- Wählst du ein Symbol aus, wird dessen Kennung wie `game-icons:sword-wound` (die Art des Symbolsatzes `:` der Name des Symbols) angezeigt; füge sie unverändert in dieses Symbolfeld ein.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### Emoji
Das Symbol mit einem Emoji anzeigen
- Zeigt ein Emoji als Symbol an.
- Gib ein Unicode-Emoji unverändert ein.
- Verwendet wird das im Ausführungsumfeld installierte Emoji, deshalb sieht es je nach Nutzer etwas anders aus.
- Mit Iconify lassen sich Emojis einstellen, die nicht vom jeweiligen Umfeld abhängen
- Es lassen sich auch andere Zeichen als Emojis anzeigen, aber bei mehreren Zeichen kann die Darstellung zerbrechen.
- Zum Beispiel gibst du ein Emoji wie `🗡️` oder `⚔️` ein.
___

## Farbe
Die Einstellung der Anzeigefarbe des Elements
- Als Farbe des Elements wird sie auf das Symbol des Elements und auf dessen Hintergrundfarbe angewendet.
- Sie wird über die Farbauswahl des Editors gewählt.
- Schwarz (`#000000`) gilt als der Wert, der „keine Farbe eingestellt“ bedeutet. Auch der Anfangswert der Farbauswahl ist dieses Schwarz.
- Willst du ein schwarzes Aussehen, gib eine leicht verschobene Farbe wie `#010101` an.
___

### Vererbung vom übergeordneten Element
Die Übernahme der Farbeinstellung des übergeordneten Elements
- Aktionen, Gegenstände und Ereignisse ohne eingestellte Farbe übernehmen die Farbe der Kategorie, zu der sie gehören.
- Die Hierarchie der Vererbung sieht so aus.
- Bei einem Element mit einzeln eingestellter Farbe hat diese Farbe Vorrang. Sie wird nicht überschrieben, auch wenn die Kategorie eine Farbe hat.
- Grundsätzlich legt man je Kategorie eine Farbe fest und überlässt das Darunterliegende der Vererbung. Eine eigene Farbe stellt man ein, wenn ein bestimmtes Element hervorstechen soll.
- Ist an der Aktion ein Attribut (attribute) eingestellt, wird nicht die Farbe der Kategorie übernommen, zu der sie gehört, sondern die der im Attribut angegebenen Kategorie.
- Die Kategorie selbst hat niemanden, von dem sie erben könnte. Bleibt die Farbe der Kategorie Schwarz (`#000000`), werden diese Kategorie und die darunterliegenden Elemente ohne eingestellte Farbe in der Mischfarbe zwischen der Balkenfarbe und der Textfarbe des Designs angezeigt.
- Gruppen, Fähigkeiten und Voreinstellungen erben nicht und verwenden nur die an ihnen selbst eingestellte Farbe.
```
world (basic.design)
└── category
    ├── action
    ├── item
    └── event
```
- [_type_](de/editor/type)
___

## Die Information kopieren
Die Information eines anderen Elements duplizieren
- Ein Druck auf die Schaltfläche `Copy Information` kopiert die Information eines anderen Elements auf einen Schlag in dieses Element.
- Wähle den Typ der Kopiervorlage (Kategorie, Aktion, Gegenstand, Gruppe, Ereignis, Fähigkeit oder Voreinstellung) und gib anschließend deren ID ein.
- Alle Felder einschließlich der Kennungs-ID werden überschrieben. Ändere die Kennungs-ID nach dem Kopieren in eine, die nicht doppelt vorkommt.
- [_type_](de/editor/type)