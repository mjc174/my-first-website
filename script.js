function generateCertificate() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Load form data
    const certificateNumber = document.getElementById("certificateNumber").value;
    const manufacturer = document.getElementById("manufacturer").value;
    const location = document.getElementById("location").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const productName = document.getElementById("productName").value;
    const brandName = document.getElementById("brandName").value;
    const quantity = document.getElementById("quantity").value;
    const lotSize = document.getElementById("lotSize").value;
    const sampleSize = document.getElementById("sampleSize").value;
    const verificationDate = document.getElementById("verificationDate").value;

    // Certificate Layout
    doc.addImage('logo.png', 'PNG', 10, 10, 30, 30); // Add RSB Logo
    doc.setFontSize(14);
    doc.text("NATIONAL METROLOGY DIVISION", 50, 20);
    doc.text("PRE-PACKAGES CONTROL LABORATORY", 50, 30);
    doc.text(`CERTIFICATE No: ${certificateNumber}`, 50, 40);

    doc.setFontSize(12);
    doc.text("1.0 Customer’s Details", 10, 60);
    doc.text(`Name of Manufacturer: ${manufacturer}`, 10, 70);
    doc.text(`Location: ${location}`, 10, 80);
    doc.text(`Telephone: ${telephone}`, 10, 90);
    doc.text(`E-mail: ${email}`, 10, 100);

    doc.text("Product Details", 10, 110);
    doc.text(`Product Name: ${productName}`, 10, 120);
    doc.text(`Brand Name: ${brandName}`, 10, 130);
    doc.text(`Declared Quantity: ${quantity}`, 10, 140);
    doc.text(`Lot Size: ${lotSize}`, 10, 150);
    doc.text(`Sample Size: ${sampleSize}`, 10, 160);
    doc.text(`Verification Completed On: ${verificationDate}`, 10, 170);

    doc.setFontSize(10);
    doc.text("Standards Used:", 10, 190);
    doc.text("OIML R 87; 2004(E) - Quantity of products in prepackages", 10, 200);
    doc.text("RS OIML R 79; 2015(E) - Labeling requirements", 10, 210);

    doc.text("Decision: The sample passed according to standards and procedures used.", 10, 230);
    doc.text("Authorized by:", 10, 250);
    doc.text("Mr. MAFUREBO Lionel", 10, 260);
    doc.text("Ag. Director of Legal Metrology", 10, 270);

    // Save PDF
    doc.save("Pre_Packages_Control_Certificate.pdf");
}
