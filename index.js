import $ from 'https://cdn.skypack.dev/pin/blingblingjs@v2.3.0-e2PTciHn3Q19fSwvwGKy/mode=imports,min/optimized/blingblingjs.js'
import Toast from 'https://cdn.jsdelivr.net/gh/thindHarminder/toast@main/toast.js'


$('#spells').on('click', async () => {
  const toastText = document.getElementById('textToast').value.trim();
  await Toast(toastText);
});




