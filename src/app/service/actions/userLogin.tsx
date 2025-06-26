export const userLogin = async (data: FormData) => {
  const res = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = res.json();
  return userInfo;
};
