---
tags:
  - name: VueJS
    color: green
  - name: Firebase
    color: orange
title: Distraction Journal
location: Delta Hacks
date: February 2020
description: Digitized distraction journal to boost focus and productivity.
slug: dist-jr
github: https://github.com/josephsawaya/distjr
demo: https://distjr-78824.web.app/
images:
  - name: dist-jr1.png
  - name: dist-jr2.png
  - name: dist-jr3.png
  - name: dist-jr4.png
  - name: dist-jr5.png
---

At DeltaHacks VI in Februrary of 2020, my team and I built a digital version of a Distraction Journal using Vue on the front-end and Firebase on the back-end.

I won't bore you with the in-depth details of how a distraction journal works but in essence it's meant to help you keep focus if you keep getting distracted by the same things over and over again, like your phone. Every time you get distracted by your phone you take note of that so you can come back to it later and stay focused on the task at hand. Here's a youtube video explaining it in more detail: [YouTube video](https://www.youtube.com/watch?v=A3qk1SMTTg4)

On a technical note this was an interesting experience, it was my first time building a full-stack web app, I had been studying JS the previous summer through Treehouse and I had done a Udemy course on how to leverage the VueJS/Firebase stack to quickly make a full stack app. A challenge that arose is configuring the Vue project to use Firebase, there are many tutorials on how to do this and we burnt through three of them to finally get it working.

After setting up the project and helping my team get set up as well it was time to start building. The first thing we wanted to get done is Authentication, we wanted to get both the front-end and back-end components done. We made used Firebase Auth, and we implemented Vue route guarding for this. We then moved on to the bulk of the task which consisted of creating the actual distraction journal, writing the HTML and CSS for this was not too complicated, but writing the interface for Firebase was where we got to work a lot with JavaScript and actually have a challenge. After a lot of research and caffeine we were able to get our front-end interacting with a Firebase Firestore instance and were able to get all functionality working.

Finally we had to polish the app and make sure everything was running smoothly in terms of auth and security and deploy the app using Firebase hosting. You can find the final version using the Demo link above.
