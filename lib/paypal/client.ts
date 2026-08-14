const PAYPAL_API = (
  process.env.PAYPAL_API_BASE_URL ||
  "https://api-m.paypal.com"
).replace(/\/$/, "");


function getCredentials() {
  const clientId =
    process.env.PAYPAL_CLIENT_ID;

  const clientSecret =
    process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error(
      "PayPal credentials are not configured."
    );
  }

  return {
    clientId,
    clientSecret,
  };
}

export async function getPayPalAccessToken() {
  const { clientId, clientSecret } =
    getCredentials();

  const auth = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64");

  const response = await fetch(
    `${PAYPAL_API}/v1/oauth2/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type":
          "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorText =
      await response.text();

    throw new Error(
      `PayPal authentication failed: ${errorText}`
    );
  }

  const data =
    await response.json();

  if (!data?.access_token) {
    throw new Error(
      "PayPal did not return an access token."
    );
  }

  return data.access_token as string;
}

export function getPayPalApiUrl() {
  return PAYPAL_API;
}