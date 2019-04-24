export default function getRandomColor() {
  const letters = '0123456789ABCDE';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}
