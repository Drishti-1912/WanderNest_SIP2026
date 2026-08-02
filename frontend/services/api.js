// const BASE_URL = "http://localhost:5000/api";

// export async function getHomestays() {
//   const response = await fetch(`${BASE_URL}/homestays`);
//   return response.json();
// }

// export async function getHomestay(id) {
//   const response = await fetch(`${BASE_URL}/homestays/${id}`);
//   return response.json();
// }
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getHomestays() {
  try {
    console.log("Fetching from:", `${BASE_URL}/homestays`);

    const response = await fetch(`${BASE_URL}/homestays`);

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("Data:", data);

    return data;
  } catch (error) {
    console.error("Actual Fetch Error:", error);
    throw error;
  }
}

export async function getHomestay(id) {
  const response = await fetch(`${BASE_URL}/homestays/${id}`);
  return response.json();
}

export async function addHomestay(data) {
  const response = await fetch(`${BASE_URL}/homestays`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function updateHomestay(id, data) {
  const response = await fetch(`${BASE_URL}/homestays/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function deleteHomestay(id) {
  const response = await fetch(`${BASE_URL}/homestays/${id}`, {
    method: "DELETE",
  });

  return response.json();
}
export async function generateItinerary(data) {
  const response = await fetch(`${BASE_URL}/ai/itinerary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}