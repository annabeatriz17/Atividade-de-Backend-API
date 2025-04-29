const PDFDocument = require("pdfkit");

const heroesModel = require("../models/heroesModel");

const exportHeroesPDF = async (req, res) => {
    try {
        const heroes = await heroesModel.getAllHeroes();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition",  "inline; filename=wizards.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Heróis", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id| Nome do Heroi | Editora", {underline: true});
        doc.moveDown(0.5);

         //Add dados dos bruxos
        heroes.forEach((hero) => {
            doc.text (
                `${hero.id} | ${hero.name_characters} | ${hero.publishers_name}`
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"});
    }
};

module.exports = { exportHeroesPDF };