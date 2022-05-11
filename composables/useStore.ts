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
      const res = await fetch(env.apiUrl + "/portofolio");
      try {
        if (res.status < 400) {
          const error = { status: res.status, name: "BACKEND_ERROR" };
          this.error = error;
          return { error }
        } else {
          const { data } = await res.json();
          this.data = data.attributes;
          return { data: data.attributes };
        }
      } catch {
        return {
          error: {
            status: 500,
            name: "InternalServerError"
          }
        }
      }
    },
  },
});

export default useStore;
