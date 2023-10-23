export const renderGenderIcon = (gender: string | null) => {
  if (gender !== "Male" && gender !== "Female") {
    return "--";
  }
  return `<img src="/assets/${gender}.png" alt="${gender}" width="20px" height="100%" />`;
};

export const renderEmails = (emails: string[]) => {
  if (!emails.length) return "--";
  return "<div>" + emails.map((email) => `<div>${email}</div>`).join("") + "</div>";
};
