import $ from 'https://cdn.skypack.dev/pin/blingblingjs@v2.3.0-e2PTciHn3Q19fSwvwGKy/mode=imports,min/optimized/blingblingjs.js'
import Toast from 'https://cdn.jsdelivr.net/gh/thindHarminder/toast@main/toast.js'





let toaststate = false; // assume initial state is false

function showToast() {
  if (toaststate) {
    const toastText = toastmessage.trim();
    if (toastText) {
      Toast(toastText).then(() => {
        toaststate = false; // reset toaststate to false after the Toast is done
      });
    }
  }
}

// whenever toaststate changes, call showToast
Object.defineProperty(window, 'toaststate', {
  set(value) {
    toaststate = value;
    showToast();
  },
  get() {
    return toaststate;
  }
});





