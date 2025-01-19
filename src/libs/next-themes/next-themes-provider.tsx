"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode, useEffect, useState } from "react";

export default function NextThemesProvider({
  children
}: {
  readonly children: ReactNode;
}) {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  );
}
