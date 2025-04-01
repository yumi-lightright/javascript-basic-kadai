// ボタンとテキスト要素を取得
const button = document.getElementById('btn');
const textElement = document.getElementById('text');

// ボタンにクリックイベントを設定
button.addEventListener('click', () => {
  textElement.textContent = 'ボタンがクリックされました'; // テキストを変更
});
