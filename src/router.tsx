import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RouterLayout from "./layouts/RouterLayout";
import AnimeWaifu from "./components/anime-waifu";
import Hamburger from "./components/hamburger/Hamburger";
import SignUpForm from "./components/sign-up-form/SignUpForm";
import MagicScroll from "./components/magic-scroll/MagicScroll";
import { ROUTES } from "./contants";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME.path} element={<RouterLayout />}>
      <Route path={ROUTES.SIGN_UP_FORM.path} element={<SignUpForm />} />
      <Route path={ROUTES.ANIME_WAIFUS.path} element={<AnimeWaifu />} />
      <Route path={ROUTES.LOTTIE_ANIMATION.path} element={<Hamburger />} />
      <Route path={ROUTES.MAGIC_SCROLL.path} element={<MagicScroll />} />
    </Route>
  )
);
