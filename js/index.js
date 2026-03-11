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
  const selectElement = document.getElementById('domein');
  selectElement.addEventListener('change', (e) => { 
    const selectedValue = e.target.value;
    console.log("選択された値:", selectedValue);

    if (selectedValue == 'atten') {
      console.log('attenを選択しました'); //何故かでてこん
    } else if (selectedValue == 'scratch') {
      console.log('scratchを選択しました');
    }
  });
}
