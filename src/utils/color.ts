export const colors = [
  { variant: "warning", color: "bg-amber-600" },
  { variant: "orange", color: "bg-orange-600" },
  { variant: "teal", color: "bg-teal-600" },
  { variant: "amber", color: "bg-amber-600" },
  { variant: "lime", color: "bg-lime-600" },
  { variant: "indigo", color: "bg-indigo-600" },
  { variant: "pink", color: "bg-pink-600" },
];

export function getColor(topic?: string) {
  function hashCode(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  if (topic) {
    const hash = hashCode(topic);
    const index = hash % colors.length;
    return colors[Math.abs(index)];
  } else {
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
