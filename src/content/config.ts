import { z, defineCollection, } from "astro:content"
import { projectTypes, Stacks } from "../types"
import { titleAndDescriptionSchema, draftAndPubDateSchema } from '@personal-projects/internal'




const project = defineCollection({

    schema: ({ image }) => draftAndPubDateSchema.and(
        titleAndDescriptionSchema.merge(
            z.object({
                type: z.enum(projectTypes),
                url: z.string().url(),
                image: image(),
                stack: z.nativeEnum(Stacks, {
                    description: "These are the that I know ",
                    required_error:
                        `You must provide a stack.
            Remember ${Object.entries(Stacks).map(([key, value]) => `${key}, stands for ${value}\n `)}
            `
                }),


            }))
    )
})


export const collections = { project }
