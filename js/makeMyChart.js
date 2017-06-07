// チャートを描画するcanvasを取得
var ctx = document.getElementById("myChart");

// File APIに対応しているか確認
if(window.File) {
    var select = document.getElementById('select');
 
    // ファイルが選択されたとき
    select.addEventListener('change', function(e) {
        // 選択されたファイルの情報を取得
        var fileData = e.target.files[0];
 
        var reader = new FileReader();
        // ファイル読み取りに失敗したとき
        reader.onerror = function() {
            alert('ファイル読み取りに失敗しました')
        }
        // ファイル読み取りに成功したとき
        reader.onload = function() {
            // 行単位で配列にする
            var lineArr = reader.result.split("\n");
            // 行と列の二次元配列にする
            var itemArr = [];
            for (var i = 0; i < lineArr.length; i++) {
                itemArr[i] = lineArr[i].split(",");
            }
            //var labelsValue = itemArr[0];
            var stuData = itemArr[0];
            var comData = itemArr[1];

            // グラフ描画するデータを設定
            var data = {
              labels: ["積極性", "論理思考", "コミュニケーション", "計画性", "○○力", "○○力", "○○力"],//labelsValue,
              datasets: [{
                label: '自己評価',
                backgroundColor: "rgba(153,255,51,0.1)",
                borderColor: "rgba(153,255,51,1)",
                //data: [2, 9, 3, 7, 8, 4, 7]
                data: stuData
              }, {
                label: '他者評価',
                backgroundColor: "rgba(255,153,0,0.1)",
                borderColor: "rgba(255,153,0,1)",
                //data: [1, 9, 10, 5, 2, 3, 1]
                data: comData
              }]
            }

            /* レーダーチャートを描画 */
            var myChart = new Chart(ctx, {
              type: 'radar',
              data: data
            });
        }

        // ファイル読み取りを実行
        reader.readAsText(fileData);
    }, false);
}

