import React from "react";
import { useEffect, useState, useRef } from "react";

import styles from "./Home.module.css";

import Opening from "./components/Opening/Opening";

export default function Home() {
  return (
    <main>
      <Opening />
    </main>
  );
}
