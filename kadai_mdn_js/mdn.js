const now = new Date(); // 現在の日時を取得

// 年と日付を抽出
const year = now.getFullYear(); // 年を取得
const month = now.getMonth() + 1; // 月を取得
const day = now.getDate(); // 日付を取得

// 結果の表示
console.log(year + "年" + month + "月" + day + "日");
