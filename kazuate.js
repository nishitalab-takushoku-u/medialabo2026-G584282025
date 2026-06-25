// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let c = document.querySelector('span#kaisu');
let r = document.querySelector('p#result');
let boolean = true;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu +=1;
  c.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  let y = document.querySelector('input[name="yosou"]');
  yoso = y.value;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if(boolean){
    if(kotae==yoso){
    r.textContent = '正解です．おめでとう!';
    boolean = false;
    }else if(kaisu==3){
      r.textContent = 'まちがい．残念でした答えは'+kotae+'です．';
      boolean = false;
    }else{
      if(yoso<kotae){
        r.textContent = 'まちがい．答えはもっと大きいですよ';
      }else{
        r.textContent = 'まちがい．答えはもっと小さいですよ';
      }
    }
  }else{
    r.textContent = '答えは'+kotae+'でした．すでにゲームは終わっています';
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#kaitou');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
