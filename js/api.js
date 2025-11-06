export async function getQuote() {
  // Tambahkan timestamp untuk mencegah cache
  const baseUrl = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;

  try {
    const response = await fetch(baseUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return {
      text: data.slip.advice,
      author: "Advice Slip",
    };
  } catch (err) {
    console.error("Gagal mengambil quote:", err);
    return {
      text: "Tidak dapat mengambil quote saat ini.",
      author: "",
    };
  }
}
