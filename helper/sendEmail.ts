import { transporter } from "./tansporter";

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  await transporter.sendMail({
    from: `"Global Crossfire Church" <no-reply@globalcrossfirechurch.org>`,
    to,
    subject,
    html,
  });
};