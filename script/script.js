document
  .getElementById("calorie-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activity").value);

    if (age < 18) {
      alert("Kalkulator ini hanya untuk orang dewasa.");
      return;
    }

    // Menggunakan rumus BMR untuk pria dan wanita
    const gender = prompt(
      "Masukkan jenis kelamin (pria/wanita):"
    ).toLowerCase();
    let bmr;

    if (gender === "pria") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === "wanita") {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    } else {
      alert("Jenis kelamin tidak valid.");
      return;
    }

    // Menghitung Total Kebutuhan Kalori
    const totalCalories = Math.round(bmr * activityLevel);

    // Menghitung kebutuhan makronutrien
    const karbohidrat = Math.round((totalCalories * 0.65) / 4); // 65% dari total kalori, 1g = 4 kalori
    const protein = Math.round((totalCalories * 0.15) / 4); // 15% dari total kalori, 1g = 4 kalori
    const lemak = Math.round((totalCalories * 0.2) / 9); // 20% dari total kalori, 1g = 9 kalori

    // Menampilkan hasil
    document.getElementById("result").innerHTML = `
      <h3>Hasil Perhitungan:</h3>
      <p>Total kebutuhan kalori harian: <strong>${totalCalories} kalori</strong></p>
      <h4>Pembagian Makronutrien:</h4>
      <ul>
        <li>Karbohidrat: ${karbohidrat}g (65%)</li>
        <li>Protein: ${protein}g (15%)</li>
        <li>Lemak: ${lemak}g (20%)</li>
      </ul>
      <p class="small text-muted">*Perhitungan berdasarkan panduan gizi seimbang</p>
    `;
  });
