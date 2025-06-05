import Color from 'color';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const svgPath =
	'M511.883,298.395c-2.781-27.281-54.391-46.141-129.406-51.844c-7.172-42.047-15.469-90.563-17.891-103.75c-5.563-30.203-45.344-47.094-74.891-25.313c-15.5,11.422-29.359,12.234-36.703,12.234s-15.5,1.625-36.703-12.234c-30.719-20.094-69.328-4.891-74.875,25.313c-2.969,16.109-14.688,84.844-22.391,130.203C45.211,293.817-2.711,323.114,0.117,350.723c4.25,41.625,122.266,63.671,263.578,49.218C405.039,385.488,516.148,340.036,511.883,298.395z M132.289,308.348l8.156-42.406c0,0,145.188,22.828,226.75-19.578l8.156,35.891C375.352,282.254,287.258,337.708,132.289,308.348z';

export async function createPDF(string: string) {
	const pdfDoc = await PDFDocument.create();
	const font = await pdfDoc.embedFont(StandardFonts.Courier);

	const page = pdfDoc.addPage();
	const { height } = page.getSize();
	const fontSize = 14;
	page.drawText(string, {
		x: 50,
		y: height - 4 * fontSize,
		size: fontSize,
		font,
	});
	const color = Color(JSON.parse(string).color);
	const [r, g, b] = color
		.rgb()
		.array()
		.map((n) => n / 255);
	page.drawSvgPath(svgPath, {
		x: 100,
		y: 500,
		scale: 0.2,
		color: rgb(r, g, b),
	});
	const pdfBytes = await pdfDoc.save();
	return pdfBytes;
}
