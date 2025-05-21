// DOMContentLoadedイベントが発生したら、以下の処理を実行
document.addEventListener('DOMContentLoaded', () => {
    // ID 'textInput' を持つ要素（テキストエリア）を取得
    const textInput = document.getElementById('textInput');
    // ID 'charCount' を持つ要素（文字数表示用のspan）を取得
    const charCountDisplay = document.getElementById('charCount');

    // アプリケーションがロードされた際の初期文字数を設定
    // テキストエリアの現在の値の長さを取得し、表示要素のテキストコンテンツに設定
    charCountDisplay.textContent = textInput.value.length;

    // テキストエリアの 'input' イベント（入力内容が変更されるたび）を監視
    textInput.addEventListener('input', () => {
        // テキストエリアの現在の値を取得
        const text = textInput.value;
        // 取得したテキストの長さを計算（文字数）
        const charCount = text.length;
        // 計算した文字数を表示要素のテキストコンテンツに設定
        charCountDisplay.textContent = charCount;
    });
});
