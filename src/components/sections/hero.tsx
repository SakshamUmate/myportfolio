import { generateWelcomeMessage } from "@/ai/flows/generate-welcome-message";
import { HeroContent } from "./hero-content";

export async function Hero() {
  const { welcomeMessage } = await generateWelcomeMessage({
    userInterests: "data science, machine learning, statistics, python",
  });

  return <HeroContent welcomeMessage={welcomeMessage} />;
}
