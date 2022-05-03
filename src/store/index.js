import { createStore } from 'vuex'
import { auth, db } from '@/firebase/firebaseInit'
import { doc,  getDoc, updateDoc, serverTimestamp } from "firebase/firestore"

export default createStore({
  state: {

    profile: {
      email: null,
      firstName: null,
      lastName: null,
      username: null,
      initials: null,
      id: null
    },
    sampleBlogCards: [
      { blogTitle: "Blog Card #1", blogText: "Card 1 Text", blogTag: "Card Tag 1", blogCoverPhoto: "stock-1", blogCoverPhotoAlt: "designed for everyone", blogDate: "May 4, 2022" },
      { blogTitle: "Blog Card #2", blogText: "Card 2 text", blogTag: "Card Tag 2", blogCoverPhoto: "stock-2", blogCoverPhotoAlt: "designed for everyone", blogDate: "May 2, 2022" },
      { blogTitle: "Blog Card #3", blogText: "Card 3 Text", blogTag: "Card Tag 3", blogCoverPhoto: "stock-3", blogCoverPhotoAlt: "designed for everyone", blogDate: "May 1, 2022" }
    ],
    sampleBlogPosts: [
      {
        blogTag: "Coding",
        blogTitle: "The first blog!",
        blogText: "This is the first blogs title",
        blogCoverPhoto: "beautiful-stories",
        blogCoverPhotoAlt: "beautiful stories"
      },
      {
        blogTag: "Development",
        blogTitle: "The second blog!",
        blogText: "This is the second blogs title",
        blogCoverPhoto: "designed-for-everyone",
        blogCoverPhotoAlt: "designed for everyone"
      },
      {
        blogTag: "Development",
        blogTitle: "The third blog!",
        blogText: "This is the third blogs title",
        blogCoverPhoto: "designed-for-everyone",
        blogCoverPhotoAlt: "designed for everyone"
      }
    ],
    tasks: [],
    user: null,
    welcomeScreen: {
      blogPrimary: "Welcome!",
      blogSecondary: "To Brumby Logs",
      blogPost: "Daily blog detailing my 100 days of coding challenge.",
      photo: "coding",
      photoAlt: "keyboard in foreground with computer monitors showing coding in the background"
    },
  },
  getters: {
  },
  mutations: {
    addTask(state, task){
      state.tasks = [{ content: task, done:false },...state.tasks]
    },
    changeFirstName(state, payload) {
      state.profile.firstName = payload
    },
    changeLastName(state, payload) {
      state.profile.lastName = payload
    },
    changeUsername(state, payload) {
      state.profile.username = payload
    },
    changeEmail(state, payload){
      state.profile.email = payload
    },
    deleteTask(state, task){
      console.log(task)
      state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    setProfileInfo(state, doc) {
      state.profile.firstName = doc.data().firstName
      state.profile.lastName = doc.data().lastName
      state.profile.username = doc.data().username
      state.profile.email = doc.data().email
      state.profile.id = doc.id
    },
    setProfileInitials(state) {
      state.profile.initials = state.profile.firstName.match(/(\b\S)?/g).join("") + state.profile.lastName.match(/(\b\S)?/g).join("");
    },
    toggleEditPost(state, payload) {
      state.editPost = payload
    },
    toggleTask(state, task) {
      task.done = !task.done
    },
    updateUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async getCurrentUser ({commit})  {
      const docRef = doc(db, "users", auth.currentUser.uid)
      const docSnap = await getDoc(docRef)
      await docSnap
      commit("setProfileInfo", docSnap)
      commit("setProfileInitials")
      console.log(docSnap)
    },
    async updateUserProfile({commit, state}) {
      const docRef = doc(db, 'users', state.profile.id);
      await updateDoc(docRef, {
        updatedOn: serverTimestamp(),
        firstName: state.profile.firstName,
        lastName: state.profile.lastName,
        username: state.profile.username,
        email: state.profile.email
      });
      commit('setProfileInitials')
    }
  }
})
