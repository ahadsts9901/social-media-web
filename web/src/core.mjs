const isProduction = window.location.href.includes("https");

export const baseUrl = isProduction ? "" : "http://localhost:3000";
