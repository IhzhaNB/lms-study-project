"use client";

import Image from "next/image";
import Logo from "@/public/logo.svg";
import LogoDark from "@/public/dark-logo.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function MyLogo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoSrc = theme === "dark" ? LogoDark : Logo;

  return <Image alt="logo" src={logoSrc} width={32} height={32} />;
}
