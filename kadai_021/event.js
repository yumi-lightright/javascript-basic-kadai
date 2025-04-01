// ボタンとテキスト要素を取得
const button = document.getElementById('btn');
const textElement = document.getElementById('text');

// ボタンにクリックイベントを設定
button.addEventListener('click', () => {

// 2秒後にテキストを変更する
  setTimeout(() => {
    textElement.textContent = 'ボタンをクリックしました';
  }, 2000);
});