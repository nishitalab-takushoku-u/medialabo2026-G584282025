
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let i = 1;
   console.log();
  for(let r of data.list.g1){
    console.log('検索結果'+i+'件目')
    console.log('タイトル:'+r.title);
    console.log('サブタイトル:'+r.subtitle);
    console.log('チャンネル:'+r.service.name);
    console.log('開始時刻:'+r.start_time);
    console.log('終了時刻:'+r.end_time);
    console.log('番組説明:'+r.content);
    console.log('出演者:'+r.act);
    i++;
  }

}

function log() {
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let cbC = 0;
  let IdList = '';
  for (let i = 0; i < checkboxes.length; i += 1) {
    let Box = checkboxes[i];
    if (Box.checked) {
      cbC += 1;
      if (IdList != '') {
        IdList = IdList + ', ';
      }
      IdList = IdList + Box.id;
    }
  }
  if (cbC == 0) {
    return;
  }
  let genreSelect = document.querySelector('#genreSelect');
  let selGenre = genreSelect.value;
  console.log('ジャンル:' + selGenre);
  console.log('チャンネル:' + IdList);
}
let l = document.querySelector('button#kensaku');
l.addEventListener('click', log);
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let oldResult = document.querySelector('#result');
  if (oldResult) {
    oldResult.remove();
  }

  let div = document.createElement('div');
  let body = document.querySelector('body');
  body.insertAdjacentElement('beforeend',div);
  div.setAttribute('id','result');

  let kensu = 0;
  let genreSelect2 = document.querySelector('#genreSelect');
  let selGenre2 = genreSelect2.value;
  let checkboxesG1 = document.querySelector('#g1');
  let checkboxesE1 = document.querySelector('#e1');


  if(checkboxesG1.checked) {
    if (data.list.g1 != undefined) {
      for (let i = 0; i < data.list.g1.length; i = i + 1) {
        let g = data.list.g1[i];

        let genreMatch = false;
        if (selGenre2 == "all") {
          genreMatch = true;
        } else {
          for (let j = 0; j < g.genres.length; j = j + 1) {
            if (g.genres[j] == selGenre2) {
              genreMatch = true;
            }
          }
        }
        if (genreMatch) {
          kensu = kensu + 1;

          let programDiv = document.createElement('div');
          programDiv.setAttribute('class', 'program');

          let kenme = document.createElement('h2');
          kenme.textContent = "検索結果" + kensu + "件目";
          programDiv.insertAdjacentElement('beforeend', kenme);

          let Bangumimei = document.createElement('h3');
          Bangumimei.textContent = g.title;
          programDiv.insertAdjacentElement('beforeend', Bangumimei);

          let startRaw = g.start_time.replace('T', ' ');
          let endRaw = g.end_time.replace('T', ' ');
          let kaisi = startRaw.substring(0, 19);
          let syuuryou = endRaw.substring(11, 19);
          let jikan = document.createElement('h4');
          jikan.textContent = g.service.name + " " + kaisi + " ~ " + syuuryou;
          programDiv.insertAdjacentElement('beforeend', jikan);

          let sonota = document.createElement('ul');
          let setumei = document.createElement('li');
          setumei.textContent = g.content;
          sonota.insertAdjacentElement('beforeend', setumei);
          if (g.act != "") {
            let syutsuyen = document.createElement('li');
            syutsuyen.textContent = "出演者: " + g.act;
            sonota.insertAdjacentElement('beforeend', syutsuyen);
          }
          programDiv.insertAdjacentElement('beforeend', sonota);
          div.insertAdjacentElement('beforeend', programDiv);
        }
      }
    }
  }
  if(checkboxesE1.checked) {
    if (data.list.e1 != undefined) {
      for (let i = 0; i < data.list.e1.length; i = i + 1) {
        let e = data.list.e1[i];

        let genreMatch = false;
        if (selGenre2 == "all") {
          genreMatch = true;
        } else {
          for (let j = 0; j < e.genres.length; j = j + 1) {
            if (e.genres[j] == selGenre2) {
              genreMatch = true;
            }
          }
        }
        if (genreMatch) {
          kensu = kensu + 1;

          let programDiv = document.createElement('div');
          programDiv.setAttribute('class', 'program');

          let kenme = document.createElement('h2');
          kenme.textContent = "検索結果" + kensu + "件目";
          programDiv.insertAdjacentElement('beforeend', kenme);

          let Bangumimei = document.createElement('h3');
          Bangumimei.textContent = e.title;
          programDiv.insertAdjacentElement('beforeend', Bangumimei);

          let startRaw = e.start_time.replace('T', ' ');
          let endRaw = e.end_time.replace('T', ' ');
          let kaisi = startRaw.substring(0, 19);
          let syuuryou = endRaw.substring(11, 19);
          let jikan = document.createElement('h4');
          jikan.textContent = e.service.name + " " + kaisi + " ~ " + syuuryou;
          programDiv.insertAdjacentElement('beforeend', jikan);

          let sonota = document.createElement('ul');
          let setumei = document.createElement('li');
          setumei.textContent = e.content;
          sonota.insertAdjacentElement('beforeend', setumei);
          if (e.act != "") {
            let syutsuyen = document.createElement('li');
            syutsuyen.textContent = "出演者: " + e.act;
            sonota.insertAdjacentElement('beforeend', syutsuyen);
          }
          programDiv.insertAdjacentElement('beforeend', sonota);
          div.insertAdjacentElement('beforeend', programDiv);
        }
      }
    }
  }
  let span = document.querySelector('span#kensu');
  span.textContent = kensu;
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

