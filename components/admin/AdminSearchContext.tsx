'use client';

import { createContext, useContext, useState } from 'react';

interface AdminSearchContextValue {
  search: string;
  setSearch: (search: string) => void;
}

const AdminSearchContext = createContext<AdminSearchContextValue | null>(null);

export function AdminSearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState('');

  return (
    <AdminSearchContext.Provider value={{ search, setSearch }}>
      {children}
    </AdminSearchContext.Provider>
  );
}

export function useAdminSearch() {
  const context = useContext(AdminSearchContext);

  if (!context) {
    throw new Error('useAdminSearch must be used inside AdminSearchProvider');
  }

  return context;
}
