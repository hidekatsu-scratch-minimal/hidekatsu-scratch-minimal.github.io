// 1. HTMLを挿入（HTML側の <div class="nyuuryoku"> も id="nyuuryoku" に直してください）
const container = document.getElementById("nyuuryoku");

if (container) {
  container.innerHTML = `
    <p>ドメイン</p>
    <select id="domein">
      <option value="new">ドメインを選択</option>
      <option value="atten">atten.win</option>
      <option value="scratch">scratch.mit.edu</option>
    </select>
    <div class="konoato"></div>`;

  // 2. 挿入した select 要素に対してイベントを設定
  const selectElement = document.getElementById('domein');
  selectElement.addEventListener('change', (e) => { // ←カンマを追加！
    const selectedValue = e.target.value;
    console.log("選択された値:", selectedValue);

    if (selectedValue == 'atten') {
      console.log('attenを選択しました');
    } else if (selectedValue == 'scratch') {
      console.log('scratchを選択しました');
    }
  });
}
