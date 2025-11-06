export function updateQuoteUI(quoteText, quoteAuthor) {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  quoteEl.textContent = `"${quoteText}"`;
  authorEl.textContent = `- ${quoteAuthor || "Unknown"}`;
}
