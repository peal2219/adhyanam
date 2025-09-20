"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function AuthAwareButton({ href, requiresAuth, children, className = "", ...props }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/status");
        setIsAuthenticated(res.ok);
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  if (requiresAuth && !isAuthenticated) {
    return (
      <Link href="/auth/signin" className={`inline-block ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={`inline-block ${className}`} {...props}>
      {children}
    </Link>
  );
}
