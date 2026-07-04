import { defineCollection, defineContentConfig, property } from "@nuxt/content";
import { z } from "zod";

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const mediaSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

const textBlockSchema = z.object({
  prefix: z.string(),
  linkLabel: z.string().optional(),
  linkHref: z.string().optional(),
  suffix: z.string().optional(),
});

export default defineContentConfig({
  collections: {
    hero: defineCollection({
      type: "data",
      source: "hero.yml",
      schema: z.object({
        greeting: z.string(),
        name: z.string(),
        rolePrefix: z.string(),
        roleHighlight: z.string(),
        summary: z.string(),
        primaryCta: linkSchema,
        resume: z.object({
          label: z.string(),
          href: property(z.string()).editor({
            input: "media",
            label: "Resume file",
            description: "Select the resume asset from the Studio media library.",
          }),
          download: z.string().optional(),
        }),
        image: mediaSchema,
        socials: z.array(
          z.object({
            label: z.string(),
            href: z.string(),
            icon: z.string(),
          })
        ),
      }),
    }),
    about: defineCollection({
      type: "data",
      source: "about.yml",
      schema: z.object({
        kicker: z.string(),
        title: z.string(),
        pullQuote: z.string().optional(),
        media: z.object({
          src: z.string(),
          type: z.enum(["video", "image"]).default("video"),
          alt: z.string(),
        }),
        paragraphs: z.array(textBlockSchema),
        ventures: z
          .array(
            z.object({
              name: z.string(),
              role: z.string(),
              note: z.string(),
            })
          )
          .optional(),
      }),
    }),
    technicalSkills: defineCollection({
      type: "data",
      source: "technical-skills.yml",
      schema: z.object({
        kicker: z.string(),
        title: z.string(),
        description: z.string(),
        toolsHeading: z.string(),
        toolsDescription: z.string(),
        categories: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            icon: z.string(),
            description: z.string(),
            color: z.string().optional(),
            bgGradient: z.string().optional(),
            technologies: z.array(
              z.object({
                name: z.string(),
                icon: z.string(),
                level: z.number(),
                color: z.string().optional(),
              })
            ),
          })
        ),
        tools: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            color: z.string().optional(),
            description: z.string(),
          })
        ),
      }),
    }),
    strengths: defineCollection({
      type: "data",
      source: "strengths.yml",
      schema: z.object({
        kicker: z.string(),
        title: z.string(),
        description: z.string(),
        experienceLabel: z.string(),
        experienceValue: z.string(),
        items: z.array(
          z.object({
            name: z.string(),
            percentage: z.number(),
            color: z.string(),
            icon: z.string(),
          })
        ),
      }),
    }),
    experience: defineCollection({
      type: "data",
      source: "experience.yml",
      schema: z.object({
        kicker: z.string(),
        title: z.string(),
        description: z.string(),
        items: z.array(
          z.object({
            company: z.string(),
            position: z.string(),
            duration: z.string(),
            location: z.string(),
            responsibilities: z.array(z.string()),
            contact: z.string().optional(),
          })
        ),
      }),
    }),
    projects: defineCollection({
      type: "data",
      source: "projects.yml",
      schema: z.object({
        kicker: z.string(),
        title: z.string(),
        description: z.string(),
        items: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            tagline: z.string().optional(),
            status: z.string().optional(),
            year: z.string().optional(),
            description: z.string(),
            icon: z.string(),
            githubUrl: z.string().optional(),
            liveUrl: z.string().optional(),
            technologies: z.array(
              z.object({
                icon: z.string(),
                name: z.string(),
              })
            ),
          })
        ),
      }),
    }),
    contact: defineCollection({
      type: "data",
      source: "contact.yml",
      schema: z.object({
        kicker: z.string(),
        title: z.string(),
        description: z.string(),
        infoTitle: z.string(),
        availabilityTitle: z.string(),
        availabilityDescription: z.string(),
        info: z.array(
          z.object({
            icon: z.string(),
            title: z.string(),
            value: z.string(),
            href: z.string(),
          })
        ),
        form: z.object({
          firstNameLabel: z.string(),
          firstNamePlaceholder: z.string(),
          lastNameLabel: z.string(),
          lastNamePlaceholder: z.string(),
          emailLabel: z.string(),
          emailPlaceholder: z.string(),
          subjectLabel: z.string(),
          subjectPlaceholder: z.string(),
          messageLabel: z.string(),
          messagePlaceholder: z.string(),
          submitLabel: z.string(),
        }),
      }),
    }),
  },
});
