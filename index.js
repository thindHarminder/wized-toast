
    import $ from 'https://cdn.skypack.dev/pin/blingblingjs@v2.3.0-e2PTciHn3Q19fSwvwGKy/mode=imports,min/optimized/blingblingjs.js'
import Toast from 'https://cdn.jsdelivr.net/gh/thindHarminder/toast@main/toast.js'


window.onload = async () => {  
$('#actions').on('click', () => {
  Toast(randomAction())
})

$('#spells').on('click', async () => {
    
  const toastText = await Wized.data.get("v.toastmessage"); // Get new value    
        console.log("Value of v.myvalue changed to: ", toastText);
  if (toastText) {
    await Toast(toastText);
  } else {
    console.log('toasttext not defined');
  }
  console.log('poof');
});



}
