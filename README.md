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

1. React JS is used to create the application.
2. Material UI is used for component library and utilities.
3. Vite is used for build and bundling.
4. Vitest and React Testing Library are used for unit testing.

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
I created this as a base for a user profile and felt it has the basic needs for a user object.

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
This post object has all of the basic components of a post to a social media platform.

---

## Unit Testing
To run the testing suite, execute the following command in the terminal:

```
$ npm run test
```

This currently only tests the rendering of a few components, but would expand to testing the results for user interactions as well.

# What I would have done next if there was more time.
### UI Design
- Format the reactions with icons and make clickable
- Add loading indicators to feed and profile page
- Theme options

### Functionality
- Comments and the ability to comment on a post
- Function to create posts. 
- Types of posts (media, location, links, etc)
- Ability to share posts
- Adding PropTypes to components that receive props to ensure accurate passage of data types
- Countless other things...

