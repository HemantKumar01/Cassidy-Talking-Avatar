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
import { useEffect, memo } from "react";
import { useLiveAPIContext } from "@/contexts/LiveAPIContext";
import { Modality } from "@google/genai";

function GeminiLiveComponent() {
  const { setConfig, setModel } = useLiveAPIContext();

  useEffect(() => {
    setModel("models/gemini-2.5-flash-preview-native-audio-dialog");

    setConfig({
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: "Leda" } },
        // other possible voices : Autotune, Callirhoe, Laomedeia
      },
      systemInstruction: {
        parts: [
          {
            text: "You are a helpful friend named cassidy. You are very friendly and supportive. You talk in a soft and lovely tone. You lie talking to people. Start first by introducing yourself and asking the person's name.",
          },
        ],
      },
    });
  }, [setConfig, setModel]);

  return (
    <div className="cassidy bg-white">
      <div></div>
    </div>
  );
}

export const GeminiLive = memo(GeminiLiveComponent);
