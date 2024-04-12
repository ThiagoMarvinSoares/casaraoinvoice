import PDFDocument from 'pdfkit';

const lorem = 'Parabéns por adquirir um produto de excelente qualidade! É com grande satisfação que o Casarão das Películas lhe dá as boas-vindas à nossa família de clientes. Agradecemos por escolher nossos serviços e temos o prazer de informar que a garantia da sua película já está confirmada.Estamos comprometidos em oferecer não apenas produtos de alta qualidade, mas também um atendimento ao cliente excepcional. Se tiver alguma dúvida ou precisar de assistência adicional, não hesite em entrar em contato conosco. Obrigado por confiar no Casarão das Películas. Estamos ansiosos para servi-lo novamente no futuro.';
const h1Title = 'Dados da instalação';
const h2Title = 'Dados do cliente';
const textoGarantia = 'Na ocorrência de falhas nos filmes, você deverá encaminhar o veículo até a nossa loja física com a garantia em mãos contendo toda a descrição do produto ou entre em contato através dos nossos canais de atendimento. É importante observar que a garantia pode ser invalidada nas seguintes situações: Danos causados por mau uso ou negligência: Qualquer dano resultante do uso inadequado do produto, como uso de produtos químicos agressivos na limpeza ou manuseio impróprio. Para evitar a perda da garantia, recomendamos seguir todas as instruções de uso e manutenção fornecidas com o produto e entrar em contato conosco em caso de dúvidas ou problemas.';

// Definindo a posição e tamanho do retângulo de fundo cinza
const rectX = 50; // Posição X do retângulo
const rectY = 610; // Posição Y do retângulo
const rectWidth = 495.28; // Largura do retângulo (largura da página A4 - margens)
const rectHeight = 160; // Altura do retângulo


export default async (req, res) => {
  console.log(`Incoming request to ${req.url} with method ${req.method}`);
  if (req.method === 'POST') {
    console.log('Received form data:', req.body);
    //let numeroGarantia = parseInt(fs.readFileSync('numeroGarantia.txt', 'utf8'));
    //numeroGarantia++;
    //fs.writeFileSync('numeroGarantia.txt', numeroGarantia.toString());

    const { produto, marcaVeiculo, modelo, placa, periodoGarantia, dataIsnt, nomeCliente, telefoneCliente, emailCliente } = req.body;

    const doc = new PDFDocument({ size: 'A4' });
    doc.fontSize(12);

    //doc.image('public/CasarãoHeader.jpg', 0, 0, { width: 595.28 });

    doc.fillColor('grey')
      .fontSize(12)
      .text(lorem, 80, 225, {
        align: 'center'
      });

    doc.fillColor('#dd2e38')
      .fontSize(18)
      .text(h1Title, 80, 360, {
        align: 'center',
      });

    doc.fontSize(12);
    doc.fillColor('black').fontSize(12).text(`Produto: ${produto}`, 55, 400);
    doc.fillColor('black').fontSize(12).text(`Placa: ${placa}`, 55, 440);
    doc.fillColor('black').fontSize(12).text(`Período de garantia: ${periodoGarantia}`, 240, 440);
    doc.fillColor('black').fontSize(12).text(`Data: ${dataIsnt}`, 430, 440)
    doc.fillColor('black').fontSize(12).text(`Marca: ${marcaVeiculo}`, 240, 400);
    doc.fillColor('black').fontSize(12).text(`Modelo: ${modelo}`, 430, 400);

    doc.fillColor('#dd2e38')
      .fontSize(18)
      .text(h2Title, 80, 475, {
        align: 'center',
      });

    doc.fillColor('black').fontSize(12).font('Helvetica').text(`Nome: ${nomeCliente}`, 55, 510);
    doc.fillColor('black').fontSize(12).font('Helvetica').text(`Email: ${emailCliente}`, 55, 550);
    doc.fillColor('black').fontSize(12).font('Helvetica').text(`Telefone: ${telefoneCliente}`, 55, 530);

    // doc.fillColor('#353535')
    //   .fontSize(16)
    //   .text(numeroGarantia, 80, 580, {
    //     align: 'center',
    //   });

    doc.fillColor('#D3D3D3')
      .rect(rectX, rectY, rectWidth, rectHeight)
      .fill();

    doc.fillColor('#dd2e38')
      .fontSize(16)
      .text('Condições para garantia', 60, 625, {
        align: 'left',
      });

    doc.fillColor('black')
      .fontSize(12)
      .text(textoGarantia, rectX + 10, rectY + 45, {
        width: rectWidth - 20,
        align: 'left'
      });

    doc.end();

    res.setHeader('Content-Disposition', 'attachment; filename=generated.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    doc.pipe(res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};


