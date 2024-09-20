// src/graph.js
export const callMsGraph = async (accessToken) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
      method: "GET",
      headers: headers,
    };
  
    return fetch("https://graph.microsoft.com/v1.0/me", options)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };
  
  export const getUserPhoto = async (accessToken) => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
      method: "GET",
      headers: headers,
    };
  
    return fetch("https://graph.microsoft.com/v1.0/me/photo/$value", options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user photo");
        }
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      })
      .catch((error) => console.log(error));
  };