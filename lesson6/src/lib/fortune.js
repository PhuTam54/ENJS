const fortuneCookies = [
    "Conquer",
    "Rivers",
    "Do not..."
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}