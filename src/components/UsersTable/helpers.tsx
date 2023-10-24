export const renderGenderIcon = (gender: string | null) => {
  if (!gender) {
    return "--";
  }
  return `<img src="/assets/${gender}.png" alt="${gender}" width="20px" height="100%" />`;
};

export const renderEmails = (emails: string[]) => {
  if (!emails) return "--";
  return (
    `<ul style="list-style-type: none;">` +
    emails.map((email) => `<li>${email}</li>`).join("") +
    "</ul>"
  );
};
