document
  .getElementById("spoon-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const foodName = document.getElementById("food-name").value.toLowerCase();
    const spoons = parseFloat(document.getElementById("spoons").value);

    // Konversi berdasarkan jenis makanan
    let gramsPerSpoon;

    switch (foodName) {
      case "nasi":
        gramsPerSpoon = 15; // 1 sendok makan nasi = 20 gram
        break;
      case "gula":
        gramsPerSpoon = 15; // 1 sendok makan gula = 15 gram
        break;
      case "tepung":
        gramsPerSpoon = 10; // 1 sendok makan tepung = 10 gram
        break;
      default:
        document.getElementById("result").innerText =
          "Makanan tidak dikenali. Silakan coba lagi.";
        return;
    }

    const totalGrams = spoons * gramsPerSpoon;

    document.getElementById(
      "result"
    ).innerText = `Jumlah gram dari ${spoons} sendok makan ${foodName} adalah ${totalGrams} gram.`;
  });
