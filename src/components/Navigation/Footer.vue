<template>
  <div>
    <v-card
     class="flex"
     flat
     tile
     color="#5cb85c"
     >
     <v-card-title class="white--text">
       <strong class="subheading"><v-icon>mdi-watch</v-icon> Blog Wacthes</strong>
       <v-spacer></v-spacer>
       <v-btn
         v-for="(icon, i) in socialIcons"
         :key="i"
         :href="icon.profile_url"
         dark
         icon
       >
         <v-icon size="24px" v-text="icon.icon_key"></v-icon>
       </v-btn>
     </v-card-title>
   </v-card>
    <v-footer
      height="auto"
      color="#5cb85c">
      <v-layout >
        <v-flex 
        class="attribution"
        text-xs-center
        text-sm-right
        white--text
        xs12
        sm6
        pr-3
        >
        All rights reserved @ {{ getCurrentYear }}
      </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    socialIcons:[{
            "profile_url": "https://www.facebook.com",
            "icon_key": "mdi-facebook",
        },
        {
            "profile_url": "https://www.twitter.com",
            "icon_key": "mdi-twitter",
        },
        {
            "profile_url": "https://www.linkedin.com",
            "icon_key": "mdi-linkedin",
        },
        {
            "profile_url": "https://www.instagram.com",
            "icon_key": "mdi-instagram",
        },
        {
            "profile_url": "https://www.github.com",
            "icon_key": "mdi-github-face",
        }]
  }),
  computed: {
    ...mapGetters([
      'menu',
    ]),
    getCurrentYear () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="css" scoped>
.attribution a[href] {
  text-decoration: underline;
  color: #ccc;
}
</style>
