export default function getRandomDelay(min: number, max: number): number {
  const minValue: number = Math.ceil(min);
  const maxValue: number = Math.floor(max);
  
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}