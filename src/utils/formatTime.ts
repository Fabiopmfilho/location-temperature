export const formatTime = (epochTime: any) => {
  let date = new Date(epochTime * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}

export const formatDate = (epochTime: any) => {
  let date = new Date(epochTime * 1000);
  let formattedDate = date.toLocaleDateString("pt-BR", {
    month: "long",
    day: "numeric",
  });
  return `Hoje, ${formattedDate}`;
}