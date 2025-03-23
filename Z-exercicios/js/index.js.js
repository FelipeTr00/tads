switch (true) {
    case (lados == 3):
    let area = (tmnho**2) * 3**(1/2) / 4
    console.log("Triângilo, de área:",area.toFixed(2))
    break;
    case (lados == 4):
    let area = tmnho**2
    console.log("Quadrado, de área:",area)
    break;
    case (lados == 5):
    console.log("Pentagono.");
    break;
    case (lados > 5):
    console.log("Polígono não mapeado.")
    break;
    default:
    console.log("Não é um polígono.")
    break;
}