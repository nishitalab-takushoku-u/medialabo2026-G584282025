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
          kensu += 1;

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
          let kaisi = startRaw.substring(0, 16);
          let syuuryou = endRaw.substring(11, 16);
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
          kensu += 1;

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
          let kaisi = startRaw.substring(0, 16);
          let syuuryou = endRaw.substring(11, 16);
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

let b = document.querySelector('button#kensaku');
b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
let MatometaData = { list: { g1: [], e1: [] } }; 
let GenresNoKazu = 0;
let endCount = 0;

function sendRequest() {
  let genre = document.querySelector('#genreSelect').value;
  let G1Checked = document.querySelector('#g1').checked;
  let E1Checked = document.querySelector('#e1').checked;
  MatometaData = { list: { g1: [], e1: [] } };
  const allGenres = ["0000", "0100", "0205", "0300", "0409", "0502", "0600", "0700", "0800", "0903", "1000", "1100"];
  let NowGenres;
  if (genre === "all") {
    NowGenres = allGenres; 
  } else {
    NowGenres = [genre]; 
  }
  GenresNoKazu = 0;
  endCount = 0;
  if (G1Checked) {
    GenresNoKazu += NowGenres.length;
  }
  if (E1Checked) {
    GenresNoKazu += NowGenres.length;
  }

  for (let i = 0; i < NowGenres.length; i = i + 1) {
  let gCode = NowGenres[i];
    if (G1Checked) {
      let urlG1 = 'https://www.nishita-lab.org/web-contents/jsons/nhk/g1-'+ gCode +'-j.json';
      axios.get(urlG1)
         .then(showResult)
          .catch(showError)
          .then(finish);
    }

    if (E1Checked) {
      let urlE1 = 'https://www.nishita-lab.org/web-contents/jsons/nhk/e1-'+ gCode +'-j.json';
      axios.get(urlE1)
          .then(showResult)
          .catch(showError)
          .then(finish);
    }
  }
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  if (data.list && data.list.g1) {
    MatometaData.list.g1 = MatometaData.list.g1.concat(data.list.g1);
  }
  if (data.list && data.list.e1) {
    MatometaData.list.e1 = MatometaData.list.e1.concat(data.list.e1);
  }
  endCount += 1;

  if (endCount == GenresNoKazu) {
    printDom(MatometaData);
  }
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