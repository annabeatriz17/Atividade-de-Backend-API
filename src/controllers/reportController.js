const PDFDocument = require("pdfkit");

const exportHeroesPDF = async (req, res) => {
    try {
        const heroes = await heroesModel.getAllHeroes();
    
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=heroes.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

    
        doc.fontSize(20).text("Relatorio de Heróis", {align: "center"});
        doc.moveDown();

        
        doc.fontSize(12).text("Id | Nome | Publisher", {underline: true});
        doc.moveDown(0.5);

        
        heroes.forEach((heroes) => {
            doc.fontSize(12).text(`${heroes.id} | ${heroes.name_characters} | ${heroes.publishers_name}`, {align: "center"});
            doc.moveDown(0.5);
        });
    
        doc.end();
    } catch (error) {
        res.status(500).json({error: "Erro ao exportar relatorio!"});
    }
};

module.exports = { exportHeroesPDF };