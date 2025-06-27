'use server';

/**
 * @fileOverview AI agent that generates a personalized welcome message based on user interests.
 *
 * - generateWelcomeMessage - A function that generates a personalized welcome message.
 * - GenerateWelcomeMessageInput - The input type for the generateWelcomeMessage function.
 * - GenerateWelcomeMessageOutput - The return type for the generateWelcomeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWelcomeMessageInputSchema = z.object({
  userInterests: z
    .string()
    .describe(
      'A comma-separated list of the user interests, derived from IP address or cookies.'
    ),
});
export type GenerateWelcomeMessageInput = z.infer<
  typeof GenerateWelcomeMessageInputSchema
>;

const GenerateWelcomeMessageOutputSchema = z.object({
  welcomeMessage: z
    .string()
    .describe('A personalized welcome message tailored to the user interests.'),
});
export type GenerateWelcomeMessageOutput = z.infer<
  typeof GenerateWelcomeMessageOutputSchema
>;

export async function generateWelcomeMessage(
  input: GenerateWelcomeMessageInput
): Promise<GenerateWelcomeMessageOutput> {
  return generateWelcomeMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWelcomeMessagePrompt',
  input: {schema: GenerateWelcomeMessageInputSchema},
  output: {schema: GenerateWelcomeMessageOutputSchema},
  prompt: `You are a portfolio website assistant, skilled at creating engaging welcome messages.

  Based on the user's detected interests, create a personalized welcome message for the portfolio website.
  The goal is to make the user feel welcome and encourage them to explore the projects.

  User Interests: {{{userInterests}}}
  `,
});

const generateWelcomeMessageFlow = ai.defineFlow(
  {
    name: 'generateWelcomeMessageFlow',
    inputSchema: GenerateWelcomeMessageInputSchema,
    outputSchema: GenerateWelcomeMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
