import $ from 'https://cdn.skypack.dev/pin/blingblingjs@v2.3.0-e2PTciHn3Q19fSwvwGKy/mode=imports,min/optimized/blingblingjs.js'
import Toast from 'https://cdn.jsdelivr.net/gh/thindHarminder/toast@main/toast.js'


let prevToastState = false;

function onToastStateChange() {
  if (toaststate && !prevToastState) {
    const toastText = toastmessage.value.trim();
    await Toast(toastText);
  }
  prevToastState = toaststate;
}

// Call the onToastStateChange function whenever toaststate is updated
toaststate = true;
onToastStateChange();




