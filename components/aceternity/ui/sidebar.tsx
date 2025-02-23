"use client";

import { cn } from "@/components/cn";
import Link from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof motion.div>, "children">) => {
  return (
    <>
      <DesktopSidebar {...props} className={className}>{children}</DesktopSidebar>
      <MobileSidebar {...props} className={className}>{children}</MobileSidebar>
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden  rounded-2xl  md:flex md:flex-col bg-blue-400/30 w-[300px] flex-shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof motion.div>, "children">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 px-4 flex items-center justify-between bg-black/90"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/imgs/logo.png"
            width={24}
            height={24}
            alt="Logo"
            className="w-6 h-6"
          />
          <span className="text-white font-medium">Cyber Security Club</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="text-white p-2"
        >
          <IconMenu2 className="w-6 h-6" />
        </button>
      </div>
      
      <AnimatePresence>
        {open && (
          <motion.div
            {...props}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed inset-0 z-50 bg-black/90 p-6 pt-20",
              className
            )}
          >
            <button
              className="absolute right-4 top-4 text-white p-2"
              onClick={() => setOpen(false)}
            >
              <IconX className="w-6 h-6" />
            </button>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface SidebarLinkProps {
  link: Links;
  className?: string;
  onClick?: () => void;
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({ link, className, onClick }) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2",
        className
      )}
      onClick={onClick}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
