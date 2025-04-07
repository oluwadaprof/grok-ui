import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LayoutState {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      isSidebarOpen: true, // Default to open
      toggleSidebar: () => set((state) => ({
        isSidebarOpen: !state.isSidebarOpen
      })),
    }),
    {
      name: 'impulse:layout'
    }
  )
)
