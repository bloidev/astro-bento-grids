import Twitch from "@auth/core/providers/twitch";
import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

export default defineConfig({
  providers: [
    Twitch({
      clientId: import.meta.env.TWITCH_CLIENT_ID,
      clientSecret: import.meta.env.TWITCH_CLIENT_SECRET,
    }),
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: import.meta.env.AUTH_SECRET,
});
