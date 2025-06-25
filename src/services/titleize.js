export function titleize(text) {
    var loweredText = text.toLowerCase()
    var words = loweredText.split(" ")

    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        if (w == "da" || w == "do" || w == "de") continue

        var firstLetter = w[0]
        w = firstLetter.toUpperCase() + w.slice(1)

        words[a] = w
    }
    return words.join(" ")
}