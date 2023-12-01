export default function getRandomRGBColor() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    let currentBrightness = 0.299 * red + 0.587 * green + 0.114 * blue;
    const maxBrightness = 90;
    if (currentBrightness > maxBrightness) {
        red = red * maxBrightness / currentBrightness;
        green = green * maxBrightness / currentBrightness;
        blue = blue * maxBrightness / currentBrightness;
    }
    return `RGB(${red}, ${green}, ${blue})`
}