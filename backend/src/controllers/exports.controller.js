const Book = require("../models/Book");
const { generateDocx } = require("../utils/docx.generator");
const { generatePdf } = require("../utils/pdf.generator");

/* ---------------- DOCX ---------------- */
async function exportAsDocx(req, res) {
  try {
    const book = await Book.findById(req.params.bookId);

    if (!book) return res.status(404).json({ error: "No such book exists!" });

    if (book.userId.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        error: "Not authorized to export this book",
      });
    }

    const buffer = await generateDocx(book);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${sanitize(book.title)}.docx"`
    );
    res.setHeader("Content-Length", buffer.length);
    res.setHeader("Cache-Control", "no-cache");

    res.send(buffer);
  } catch (error) {
    console.error("DOCX export error:", error);
    if (!res.headersSent) res.status(500).json({ error: error.message });
  }
}

/* ---------------- PDF ---------------- */
async function exportAsPdf(req, res) {
  try {
    const book = await Book.findById(req.params.bookId);

    if (!book) return res.status(404).json({ error: "No such book exists!" });

    if (book.userId.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        error: "Not authorized to export this book",
      });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${sanitize(book.title)}.pdf"`
    );
    res.setHeader("Cache-Control", "no-cache");

    await generatePdf(book, res);
  } catch (error) {
    console.error("PDF export error:", error);
    if (!res.headersSent) res.status(500).json({ error: error.message });
  }
}


/* ---------------- HELPER ---------------- */
function sanitize(name = "book") {
  return name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}

module.exports = { exportAsDocx, exportAsPdf };
