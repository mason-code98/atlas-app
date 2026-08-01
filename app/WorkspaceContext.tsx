"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Workspace = "Mason" | "Atlas Demo";

type WorkspaceContextType = {
  workspace: Workspace;
  setWorkspace: (workspace: Workspace) => void;
};

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(
  undefined
);

export function WorkspaceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [workspace, setWorkspace] = useState<Workspace>("Mason");

  return (
    <WorkspaceContext.Provider value={{ workspace, setWorkspace }}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error(
      "useWorkspace must be used inside a WorkspaceProvider"
    );
  }

  return context;
}