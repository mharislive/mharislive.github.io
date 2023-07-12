export const ROUTES = {
  HOME: { path: "/", label: "Home" },
  SIGN_UP_FORM: { path: "sign-up-form", label: "Sign Up Form" },
  ANIME_WAIFUS: { path: "anime-waifus", label: "Anime Waifus" },
  LOTTIE_ANIMATION: { path: "lottie-animation", label: "Lottie Animation" },
  MAGIC_SCROLL: { path: "magic-scroll", label: "Magic Scroll" },
};

export const navigation = [
  { path: ROUTES.HOME.path, label: ROUTES.HOME.label },
  { path: `/${ROUTES.SIGN_UP_FORM.path}`, label: ROUTES.SIGN_UP_FORM.label },
  { path: `/${ROUTES.ANIME_WAIFUS.path}`, label: ROUTES.ANIME_WAIFUS.label },
  {
    path: `/${ROUTES.LOTTIE_ANIMATION.path}`,
    label: ROUTES.LOTTIE_ANIMATION.label,
  },
  { path: `/${ROUTES.MAGIC_SCROLL.path}`, label: ROUTES.MAGIC_SCROLL.label },
];
