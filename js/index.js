document.getElementById("nyuuryoku").innerHTML = `
<p>ドメイン<p><select id="domein">
<option value="new">ドメインを選択</option>
<option value="atten">atten.win</option>
<option value="scratch">scratch.mit.edu</option>
</select>
<div class="konoato"></div>`;

const select = document.getElementById('nyuuryoku');
select.addEventListener('change'(e) => {
  const selectedValue = e.target.value;
  
  if (selectedValue === 'atten') {
    console.log('atten');
  } else if (selectedValue === 'scratch') {
    console.log('scratch');
  }
});
