---
tags:
  - name: C++
    color: blue
  - name: Arduino
    color: grey
title: Smart Trash
location: NewHacks
date: March 2019
description: Smart trash can able to detect when it's full and detect weight of contents.
slug: smart-trash
github: https://github.com/josephsawaya/SmartTrash
---

At NewHacks in March of 2020, my team and I built a trash can with sensors attached to it that could detect how much it's contents weighed and when it was full.

This was my first hackathon and my first time programming for a reason other than school, and my team won first place in the IoT category.

For this project we used a cloud-connected Arduino made by Particle called the [Photon](https://store.particle.io/collections/wifi/products/photon-kit).

This device allowed us to collect data from the sensors like a regular Arduino would, then use the Photon's wifi interface to send this data to the Particle Console. From the console we could send that data to something like a Google Sheet, or in our case a GeckoBoard that would display the data collected.

We used a HC-SR04 Ultrasonic sensor and a HX711 Load cell for our sensors. The ultrasonic sensor was attached at the top of the trash can and when it would be obstructed by something we would know through the measurements it was collecting. The load cell, was placed at the bottom of the trash can, next to the Photon and a battery, these three elements were covered by a wooden plank.

For the software we found libraries that could help us interface with these sensors so all we had to do was make use of these libraries to collect the data and publish the data at a certain time interval.

This was definitely not the cleanest software I've written and to be honest at the time I did not fully understand how it worked, but the team and I got it working and we were happy witht he result.
