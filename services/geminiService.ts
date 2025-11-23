import { GoogleGenAI, Type } from "@google/genai";
import { VibeResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDigitalVibeCheck = async (inputText: string): Promise<VibeResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyze the following text (which is a user's bio, opening line, or self-description) and give a "first impression" reading. 
      
      The persona you are adopting is "Upfront": A suave, tactful, but brutally honest observer of human behavior. You are playful, whimsical, and hip.
      
      Input Text: "${inputText}"
      
      Return JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            vibe: {
              type: Type.STRING,
              description: "A 2-3 word abstract poetic description of their vibe (e.g. 'Nervous Golden Retriever', 'Calculated Mystery')."
            },
            analysis: {
              type: Type.STRING,
              description: "A 2 sentence reading of how they come across based on this text. Be constructive but piercingly accurate."
            },
            score: {
              type: Type.NUMBER,
              description: "A 'Magnetism Score' from 1 to 10."
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as VibeResponse;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini Vibe Check Error:", error);
    throw error;
  }
};