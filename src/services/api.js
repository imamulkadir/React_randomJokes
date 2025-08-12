const API_URL =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?type=twopart";

export async function getRandomJoke() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    console.log("Fetched joke:", data); // Debug log
    return { setup: data.setup || "", delivery: data.delivery || "" };
  } catch (err) {
    console.error("Error fetching joke:", err);
    return { setup: "", delivery: "" };
  }
}
