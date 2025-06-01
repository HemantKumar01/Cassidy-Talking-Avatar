/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use client";
import { LiveAPIProvider } from "@/contexts/LiveAPIContext";
import ControlTray from "@/components/avatar/control-tray/ControlTray";
import { LiveClientOptions } from "./types";
import { GeminiLive } from "@/components/avatar/geminiLive/geminiLive";
import Cassidy from "@/components/avatar/cassidy/cassidy";
import { requireAuth } from "@/lib/firebase";
import "./App.scss";

import "./globals.css";
import { sign } from "crypto";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;
if (typeof API_KEY !== "string") {
  throw new Error("set NEXT_PUBLIC_GEMINI_API_KEY in .env");
}

const apiOptions: LiveClientOptions = {
  apiKey: API_KEY,
};

function Home() {
  return (
    <div className="App w-full h-full">
      <LiveAPIProvider options={apiOptions}>
        <div className=" h-full w-full bg-[#00ce8d]">
          <main>
            <Cassidy></Cassidy>
            <GeminiLive></GeminiLive>
            <ControlTray>{/* put your own buttons here */}</ControlTray>
          </main>
        </div>
      </LiveAPIProvider>
    </div>
  );
}

export default Home;
