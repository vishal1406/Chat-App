export const getFormattedTime = (time) => {
   const date = new Date(time);
   const formattedTime = date.toLocaleString("en-IN", { hour: "numeric", minute: "numeric", hour12: true });
   return formattedTime;
};
