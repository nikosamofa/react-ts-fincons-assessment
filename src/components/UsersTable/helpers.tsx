export const renderGenderIcon = (gender: string | null) => {
  if (!gender || (gender !== "Male" && gender !== "Female")) {
    return "--";
  }
  const icons = {
    Male: "https://cdn-icons-png.flaticon.com/512/44/44483.png",
    Female: "https://cdn-icons-png.flaticon.com/512/4086/4086123.png",
  };
  return `<img src="${icons[gender]}" alt="${gender}" width="20px" height="100%" />`;
};

export const renderEmails = (emails: string[]) => {
  if (!emails) return "--";
  return (
    `<ul style="list-style-type: none;">` +
    emails.map((email) => `<li>${email}</li>`).join("") +
    "</ul>"
  );
};
