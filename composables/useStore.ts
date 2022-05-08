import { defineStore } from "pinia";

const useStore = defineStore("portfolio", {
  state: () => {
    const { public: env } = useRuntimeConfig();
    return {
      data: {
        avatarUrl: env.dataAvatar,
        fullname: env.dataFullname,
        nickname: env.dataNickname,
        greeting: env.dataGreeting,
        about: env.dataAbout,
        quote: {
          content: env.dataQuoteContent,
          author: env.dataQuoteAuthor,
        },
        skills: env.dataSkills,
        experiences: env.dataExperiences,
        social: {
          github: env.dataSocialGithub,
          twitter: env.dataSocialTwitter,
          linkedin: env.dataSocialLinkedin,
          whatsapp: env.dataSocialWhatsapp,
        },
        // projects: [],
      },
      error: null,
    }
  },
  actions: {
    async fetchData() {
      const { public: env } = useRuntimeConfig();
      const { data, error } = await fetch(env.apiUrl + "/portofolio")
        .then((res) => res.json())
        .then((res) => res);
      try {
        if (error) {
          this.error = error;
          return { error }
        } else {
          this.data = data.attributes;
          return { data: data.attributes };
        }
      } catch {
        return {
          error: {
            status: 500,
            message: "InternalServerError"
          }
        }
      }
    },
  },
});

export default useStore;
