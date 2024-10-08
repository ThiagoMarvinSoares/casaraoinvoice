/* eslint-disable import/no-anonymous-default-export */
import PDFDocument from 'pdfkit';
import path from 'path';

const imagePath = path.join(process.cwd(), 'public/casaraoheader.jpg');
const imagePathBotton = path.join(process.cwd(), 'public/casaraofooter.jpg');
const iconOnePath = path.join(process.cwd(), 'public/manutencao.jpg');
const iconTwoPath = path.join(process.cwd(), 'public/warning.jpg');

const lorem = 'Parabéns por adquirir um produto de excelente qualidade! É com grande satisfação que o Casarão das Películas lhe dá as boas-vindas à nossa família de clientes. Agradecemos por escolher nossos serviços e temos o prazer de informar que a garantia da sua película já está confirmada.Estamos comprometidos em oferecer não apenas produtos de alta qualidade, mas também um atendimento ao cliente excepcional. Se tiver alguma dúvida ou precisar de assistência adicional, não hesite em entrar em contato conosco. Obrigado por confiar no Casarão das Películas. Estamos ansiosos para servi-lo novamente no futuro.';
const h1Title = 'Dados da instalação';
const h2Title = 'Dados do cliente';
const textoGarantia = 'Na ocorrência de falhas nos filmes, você deverá encaminhar o veículo até a nossa loja física com a garantia em mãos contendo toda a descrição do produto ou entre em contato através dos nossos canais de atendimento. É importante observar que a garantia pode ser invalidada nas seguintes situações: Danos causados por mau uso ou negligência: Qualquer dano resultante do uso inadequado do produto, como uso de produtos químicos agressivos na limpeza ou manuseio impróprio. Para evitar a perda da garantia, recomendamos seguir todas as instruções de uso e manutenção fornecidas com o produto e entrar em contato conosco em caso de dúvidas ou problemas.';

const items = [
  "O processo de instalação da película exige um período apropriado de secagem, podendo apresentar variações de acordo com as condições do tempo",
  "Não limpe a película nos próximos 10 dias após a instalação.",
  "Não manuseie os vidros até que estejam secos, por pelo menos 24 horas.",
  "Utilize sempre materiais novos, limpos e macios para lavar e secar a superfície da película.",
  "Limpezas periódicas são recomendadas para manter as propriedades de durabilidade do material.",
  "Nas aplicações automotivas, não abra as janelas por um período mínimo de 24 horas após a aplicação, para a perfeita adesão do filme ao vidro.",
  "Qualquer produto instalado sobre a película poderá danificar sua estrutura. Não aplique qualquer material, adesivo, fitas, GPS ou qualquer outro equipamento sobre a película.",
  "Nunca limpar os vidros quando o mesmo estiver quente. Se possível, limpá-los na parte da manhã ou no final do dia, para evitar danos à camada resistente à abrasão.",
  "Nenhum material ou ferramenta agressivo, cortante, perfurante ou de marcação deve ser utilizado sobre o produto, implicando na perda da garantia.",
  "Recomendamos a limpeza com detergente líquido diluído em água utilizando um pano macio ou esponja macia sintética",
];

const secondItems = [
  'Casarão das Películas substitui produtos defeituosos, incluindo falhas como bolhas ou delaminação, dentro do prazo de garantia.',
  'Esta garantia limitada não é transferível, apenas o comprador direto pode utilizar a certificação.',
  'Casarão das Películas não se responsabiliza pelos seguintes danos:Manutenção imprópria da película, Quebra de vidros, Quaisquer outros erros não associados à fabricação da película.',
  'Caso seja necessário aplicar a mudança de película proveniente de defeitos, a substituição não expande o período de garantia.',
];

// Definindo a posição e tamanho do retângulo de fundo cinza
const rectX = 50; // Posição X do retângulo
const rectY = 610; // Posição Y do retângulo
const rectWidth = 495.28; // Largura do retângulo (largura da página A4 - margens)
const rectHeight = 160; // Altura do retângulo

// let counter;

// fs.writeFileSync('counter.txt', counter.toString(), (err) => {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log(`PDF generated. Total count: ${counter}`);
//   }
// });

// try {
//   const dataText = fs.readFileSync('counter.txt', 'utf-8');
//   counter = parseInt(dataText);
// } catch (error) {
//   console.log('Error reading counter file:', error.message);
// }

export default async (req, res) => {
  if (req.method === 'POST') {

    const produto = req.body.produto;
    // console.log(counter)
    // const numeroNota = counter;
    const marcaVeiculo = req.body.marcaVeiculo;
    const modelo = req.body.modelo;
    const placa = req.body.placa;
    const periodoGarantia = req.body.periodoGarantia;
    const dataInst = req.body.dataInst;
    const nomeCliente = req.body.nomeCliente;
    const telefoneCliente = req.body.telefoneCliente;
    const emailCliente = req.body.emailCliente;
    const fs = require('fs');
   
    const doc = new PDFDocument({ size: 'A4' });
    doc.fontSize(12);

    doc.image(imagePath, 0, 0, { width: 595.28 });

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
    // doc.fillColor('#dd2e38').fontSize(12).text(`Numero da nota: ${numeroNota}`, 55, 364);
    doc.fillColor('black').fontSize(12).text(`Produto: ${produto}`, 55, 400);
    doc.fillColor('black').fontSize(12).text(`Placa: ${placa}`, 55, 440);
    doc.fillColor('black').fontSize(12).text(`Período de garantia: ${periodoGarantia}`, 240, 440);
    doc.fillColor('black').fontSize(12).text(`Data: ${dataInst}`, 430, 440)
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

      doc.addPage();

      doc.fillColor('#dd2e38')
      .fontSize(18)
      .text('Cuidados e manutenção da película', 60, 40, {
        align: 'left',
      });

      doc.image(iconOnePath, 355, 42, { width: 14 });

      let yPos = 85;

      items.forEach(item => {
        doc.fillColor('black')
          .font('Helvetica')
          .fontSize(11)
          .text(item, 60, yPos, {
          align: 'left',
        });
    
        yPos += 28;
    });

    doc.fillColor('#dd2e38')
      .fontSize(18)
      .text('Condições da garantia', 60, 380, {
        align: 'left',
      });

      doc.image(iconTwoPath, 250, 381, { width: 14 });

      let yPosSecond = 410;
      secondItems.forEach(item => {
        doc.fillColor('black')
        .font('Helvetica')
        .fontSize(11)
        .text(item, 60, yPosSecond, {
          align: 'left',
        });
        yPosSecond += 35;
      })

      doc.fillColor('#dd2e38')
      .fontSize(12)
      .text('Em nenhum caso Casarão das peliculas será responsável por outros custos, despesas, perdas ou danos(independente de serem considerados direitos especiais, consequências ou acidentais) que não são de qualquer modo referente à película.', 40, 580, {
        align: 'center',
      });

      doc.image(imagePathBotton, 0, 640, { width: 595.28 });

    doc.end();

    res.setHeader('Content-Disposition', 'attachment; filename="TestFile.pdf"');
  
    res.setHeader('Content-Type', 'application/pdf');

    doc.pipe(res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};


