// app/Analytics.tsx
"use client";
import { collectVisitorInfo } from "@/services/visitorInfo";
import { sendMessage } from "@/services/webFromsApi";
import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    async function track() {
      try {
        const userData = await collectVisitorInfo();
        sendMessage(userData);
      } catch (error) {
        //@ts-ignore
        console.log(error?.message);
      }
    }
    track();
  }, []);
  return null;
}
