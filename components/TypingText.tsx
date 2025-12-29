"use client";

import React, { useEffect, useState } from "react";

export default function TypingText({
  text = "Digital Future",
  speed = 80,
  pause = 900,
}: {
  text?: string;
  speed?: number;
  pause?: number;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let mounted = true;
    let i = 0;
    const type = () => {
      if (!mounted) return;
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          if (!mounted) return;
          // small pause then finish (not looping)
        }, pause);
      }
    };
    type();
    return () => {
      mounted = false;
    };
  }, [text, speed, pause]);

  return <span className="border-r pr-1 animate-cursor">{display}</span>;
}
