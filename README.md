# Couch Social

## Purpose

A social media app to connect friends, groups of like-minded folks, and generate conversation.

---

## Goals

- It should have a user centric view where the user can see their profile.

- It should have a screen for listing mock posts from friends and a detail view of the posts.

- It should have placeholders for what good data structures for users and posts and friends.

- Mock API calls and data as needed

---

## Running Locally

To install, open project folder and run:

```
$ npm install
```

Once all dependencies are install, run locally by running:

```
$ npm run dev
```

Open your browser and visit [http://localhost:5173](http://localhost:5173)

---

## Overview

1. React JS used to create the application
2. Material UI used for component library and utilities
3. Vite used for build and bundling
4. Vitest used for unit testing

---

## Data Models

### User

```
{
    "username": string,
    "full_name": string,
    "bio": string,
    "profile_picture_url": string,
    "cover_photo_url": string,
    "email": string,
    "location": string,
    "followers_count": number,
    "following_count": number
}
```

### Post

```
{
    "post_id": string,
    "author": {
        "username": string,
        "profile_picture_url": string,
    }
    "message": string,
    "timestamp": string,
    "reactions": {
        "like": number,
        "love": number,
        "lol": number,
        "wow": number,
        "sad": number,
        "angry": number
    },
    "comments": [
        {
            "user": {
                "username": string,
                "profile_picture_url": string,
            },
            "message": string,
            "timestamp": string
        }
    ]
}
```

---

## What I would have done next if there was more time.
### UI Design
- Format the reactions with icons and make clickable
- Add comments and a way to comment
- Add loading indicators to feed and profile page

### 

<!-- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
