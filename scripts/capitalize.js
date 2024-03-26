export default function capitalize(input) {
  const trimmed = input.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}
