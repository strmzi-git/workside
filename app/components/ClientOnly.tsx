"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactElement[];
}

const ClientOnly: React.FC<ClientOnlyProps> = function ({ children }) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return <>{children}</>;
};

export default ClientOnly;
