import React, { lazy } from "react";
const WordsListEnglish = lazy(() => import("./components/listComponents/WordsListEnglish"));
const CardsContainer = lazy(() => import("./components/cardComponents/CardsContainer"));
const Error404 = lazy(() => import("./components/common/Error404"));

export const appRoutes = [
  { path: "/", element: <WordsListEnglish /> },
  { path: "/game", element: <CardsContainer /> },
  { path: "*", element: <Error404 /> },
];
