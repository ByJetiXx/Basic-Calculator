<input id="num1" type="number">
<input id="num2" type="number">
<button onclick="hesapla()">Hesapla</button>
<p id="sonuc"></p>

<script>
function hesapla() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sonuc = num1 + num2;
    document.getElementById('sonuc').innerText = 'Sonuç: ' + sonuc;
}
</script>
