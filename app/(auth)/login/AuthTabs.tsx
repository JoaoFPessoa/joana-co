"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AuthTabs() {
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <>
      <Tabs
        defaultValue="login"
        className="w-full "
        onValueChange={setSelectedTab}
      >
        <TabsList className="w-full">
          <TabsTrigger value="login" className="flex-1">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="flex-1">
            Criar conta
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="">
        <AnimatePresence mode="wait">
          {selectedTab === "login" ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <LoginForm />
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <RegisterForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
