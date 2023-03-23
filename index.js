
import $ from 'https://cdn.skypack.dev/pin/blingblingjs@v2.3.0-e2PTciHn3Q19fSwvwGKy/mode=imports,min/optimized/blingblingjs.js'
import Toast from 'https://cdn.jsdelivr.net/gh/thindHarminder/toast@main/toast.js'



const newValue = "Empty";
window.onload = async () => {  
  Wized.data.listen("v.toastmessage", async () => {    
      newValue = await Wized.data.get("v.toastmessage"); // Get new value    
      console.log("Value of v.toastmessage changed to: ", newValue); // Console log new value  
      
  });
}
$('#spells').on('click', async () => {
    
  const toastText = newValue
  if (toastText) {
    await Toast(toastText);
  } else {
    console.log('toasttext not defined');
  }
  console.log('poof');
});





