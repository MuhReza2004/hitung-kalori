document
  .getElementById("spoon-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const foodNameInput = document
      .getElementById("food-name")
      .value.toLowerCase()
      .replace(/\s+/g, "_"); // Input dari user diubah menjadi format dengan underscore
    const spoons = parseFloat(document.getElementById("spoons").value);

    // Konversi berdasarkan jenis makanan
    let gramsPerSpoon;

    switch (foodNameInput) {
      case "nasi":
        gramsPerSpoon = 15; // 1 sendok makan nasi = 15 gram
        break;
      case "gula":
        gramsPerSpoon = 15; // 1 sendok makan gula = 15 gram
        break;
      case "tepung":
        gramsPerSpoon = 10; // 1 sendok makan tepung = 10 gram
        break;
      case "abon":
        gramsPerSpoon = 10; // 1 sendok makan tempe orek = 15 gram
        break;
      case "ayam_suir":
        gramsPerSpoon = 10; // 1 sendok makan tempe orek = 15 gram
        break;
      case "tempe_orek":
        gramsPerSpoon = 15; // 1 sendok makan tempe orek = 15 gram
        break;
      case "sayur_bayam_bening":
        gramsPerSpoon = 10; // 1 sendok makan tempe orek = 15 gram
        break;
      case "tumis_kangkung":
        gramsPerSpoon = 10; // 1 sendok makan tempe orek = 15 gram
        break;
      case "gado_gado":
        gramsPerSpoon = 20; // 1 sendok makan tempe orek = 15 gram
        break;
      case "wortel_rebus":
        gramsPerSpoon = 10; // 1 sendok makan tempe orek = 15 gram
        break;
      case "mie_kering_rebus":
        gramsPerSpoon = 10; // 1 sendok makan tempe orek = 15 gram
        break;
      case "kentang_balado":
        gramsPerSpoon = 15; // 1 sendok makan tempe orek = 15 gram
        break;
      case "jagung_rebus":
        gramsPerSpoon = 10; // 1 sendok makan tempe orek = 15 gram
        break;
      default:
        document.getElementById("result").innerText =
          "Makanan tidak dikenali. Silakan coba lagi.";
        return;
    }

    // Ganti underscore dengan spasi untuk ditampilkan
    const displayFoodName = foodNameInput.replace(/_/g, " ");

    const totalGrams = spoons * gramsPerSpoon;

    document.getElementById(
      "result"
    ).innerText = `Jumlah gram dari ${spoons} sendok makan ${displayFoodName} adalah ${totalGrams} gram.`;
  });
