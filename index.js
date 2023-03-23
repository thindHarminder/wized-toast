
    import $ from 'https://cdn.skypack.dev/pin/blingblingjs@v2.3.0-e2PTciHn3Q19fSwvwGKy/mode=imports,min/optimized/blingblingjs.js'
import Toast from 'https://cdn.jsdelivr.net/gh/thindHarminder/toast@main/toast.js'




window.onload = async () => {  
  Wized.data.listen("v.myvalue", async () => {    
      const newValue = await Wized.data.get("v.myvalue"); // Get new value    
      console.log("Value of v.myvalue changed to: ", newValue); // Console log new value  
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



}
