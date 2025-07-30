function generatePassword() {
  const upperCount = parseInt(document.getElementById('upperCount').value) || 0;
  const lowerCount = parseInt(document.getElementById('lowerCount').value) || 0;
  const numberCount = parseInt(document.getElementById('numberCount').value) || 0;
  const symbolCount = parseInt(document.getElementById('symbolCount').value) || 0;

  const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
  const numberSet = '0123456789';
  const symbolSet = '!@#$%^&*()_+[]{}|;:,.<>?';

  let password = '';

  function getRandomChar(set, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
      result += set[Math.floor(Math.random() * set.length)];
    }
    return result;
  }

  password += getRandomChar(upperSet, upperCount);
  password += getRandomChar(lowerSet, lowerCount);
  password += getRandomChar(numberSet, numberCount);
  password += getRandomChar(symbolSet, symbolCount);

  // Shuffle password
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  document.getElementById('passwordDisplay').innerText = password || 'Please enter values!';
}
