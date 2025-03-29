export const sendMessage = (data: any) => {
  data.access_key = process.env.NEXT_PUBLIC_WEB_FORMS_ACCESS_KEY || null;
  const jsonData = JSON.stringify(data);
  // console.log(jsonData);
  if (process.env.NODE_ENV === "development") return;
  return fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: jsonData,
  });
};
