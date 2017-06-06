// フォント定義
pdfMake.fonts = {
    GenShin: {
        normal: 'GenShinGothic-Normal-Sub.ttf',
        bold: 'GenShinGothic-Normal-Sub.ttf',
        italics: 'GenShinGothic-Normal-Sub.ttf',
        bolditalics: 'GenShinGothic-Normal-Sub.ttf'
    }
}
defaultStyle = 'GenShin'

// PDF生成イベントハンドラ
function createPdf(){
    docDefinition = {
        content: {
            image:document.getElementById("myChart").toDataURL(),
            width: 450,
            height: 450
        },
        defaultStyle: {
            font: defaultStyle
        }
    }
    pdfMake.createPdf(docDefinition).open();
}