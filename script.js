function calculateLVMIndex() {
  let lvm = parseFloat(document.getElementById('lvm').value);
  let height = parseFloat(document.getElementById('height').value);
  if (lvm && height) {
    let lvmIndex = (lvm / Math.pow(height, 2.7)).toFixed(2);
    document.getElementById('result').innerHTML = "ИММЛЖ: " + lvmIndex;
  } else {
    document.getElementById('result').innerHTML = "Пожалуйста, введите массу левого желудочка и рост.";
  }
}
