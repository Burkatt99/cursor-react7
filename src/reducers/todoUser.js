import { ADD_ITEM_USER } from "../constans/user_type";
import myPhoto from "../assets/images/author-min.jpg";
import dog from "../assets/images/dog.png";
import course from "../assets/images/po.png";
import pazzle from "../assets/images/pazzle-min.jpg";
import books from "../assets/images/books-min.jpg";
const initialState = {
  posts: [
    {
      name: "Bura Tetiana",
      photo: myPhoto,
      content:
        "I dream so much about this little miracle!! This sweet puppy deserves your likes!",
      image: dog,
      date: "22 April",
    },
    {
      name: "Bura Tetiana",
      photo: myPhoto,
      content:
        "I love reading detectives. And what do you choose? Is adventure, fantasy, horror, or maybe something romantic?",
      image: books,
      date: "22 April",
    },
    {
      name: "Bura Tetiana",
      photo: myPhoto,
      content:
        "During quarantine, everyone opens new hobbies. I started to make the second picture, and you??",
      image: pazzle,
      date: "22 April",
    },
    {
      name: "Bura Tetiana",
      photo: myPhoto,
      content:
        "I found new cool courses from Cursor. I hope that by the end of my studies I will become a real programmer!",
      image: course,
      date: "22 April",
    },
  ],
  users: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
