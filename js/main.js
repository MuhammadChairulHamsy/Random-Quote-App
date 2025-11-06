import { getQuote } from "./api.js";
import { updateQuoteUI } from "./ui.js";

const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", async () => {
  newQuoteBtn.disabled = true;
  newQuoteBtn.textContent = "Loading...";

  const quote = await getQuote();
  updateQuoteUI(quote.text, quote.author);

  newQuoteBtn.textContent = "Get Quote";
  newQuoteBtn.disabled = false;
});

// Ambil quote pertama kali saat halaman dibuka
window.addEventListener("DOMContentLoaded", async () => {
  const quote = await getQuote();
  updateQuoteUI(quote.text, quote.author);
});
