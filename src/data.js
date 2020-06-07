import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "username",
  name: "name",
  profile_image:
    "https://instagram.fiev17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102395736_859804591214951_6079562680350277632_n.jpg?_nc_ht=instagram.fiev17-1.fna.fbcdn.net&_nc_ohc=4Mgrrvq66_kAX98DQWx&oh=6503fcd4600d8350e84a88003c66fb9f&oe=5F074CC5"
  // profile_image:
  // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://instagram.fiev17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102395736_859804591214951_6079562680350277632_n.jpg?_nc_ht=instagram.fiev17-1.fna.fbcdn.net&_nc_ohc=4Mgrrvq66_kAX98DQWx&oh=6503fcd4600d8350e84a88003c66fb9f&oe=5F074CC5"
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>•<br>•<br>when an unknown printer took a galley of type and scrambled it to make a type specimen book. ...</span>`,
  user: defaultUser,
  media:
    "https://instagram.fiev17-2.fna.fbcdn.net/v/t51.2885-15/e15/11242496_436709673167209_253484341_n.jpg?_nc_ht=instagram.fiev17-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wnuUf_YoZpUAX-VOtKb&oh=3da2fe4e8245b33b859cb65ee926daaa&oe=5F071B90",
  comments: [],
  created_at: "2020-02-28T03:08:14.522421+00:00"
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<br>•<br>•<br>when an unknown printer took a galley of type and scrambled it to make a type specimen book. ...</span>`,
    user: defaultUser,
    media:
      "https://instagram.fiev17-2.fna.fbcdn.net/v/t51.2885-15/e15/11242496_436709673167209_253484341_n.jpg?_nc_ht=instagram.fiev17-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wnuUf_YoZpUAX-VOtKb&oh=3da2fe4e8245b33b859cb65ee926daaa&oe=5F071B90",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00"
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultPost,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  }
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "me",
  name: "myself",
  profile_image:
    "",
  website: "https://react12.io",
  email: "me@gmail.com",
  bio: "This is my bio",
  phone_number: "555-555-5555",
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser]
};
