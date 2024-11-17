document
  .getElementById("calorie-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activity").value);

    // Menghitung BMR menggunakan rumus Mifflin-St Jeor
    let bmr;
    if (age < 18) {
      alert("Kalkulator ini hanya untuk orang dewasa.");
      return;
    } else {
      // Menggunakan rumus BMR untuk pria dan wanita
      const gender = prompt(
        "Masukkan jenis kelamin (pria/wanita):"
      ).toLowerCase();
      if (gender === "pria") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === "wanita") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      } else {
        alert("Jenis kelamin tidak valid.");
        return;
      }
    }

    // Menghitung Total Kebutuhan Kalori
    const totalCalories = bmr * activityLevel;

    document.getElementById(
      "result"
    ).innerText = `Kebutuhan kalori harian Anda adalah ${Math.round(
      totalCalories
    )} kalori.`;
  });
