---
title: Create new system | LESSONS LEARNT
date: "2017-11-11T22:12:03.284Z"
path: "/create-new-system-lessons-learnt/"
---

During this year, I was assigned to create new system from scratch.
It was my turn to choose technology stack, figure out how backend will communicate with frontend, how the API will be designed and so on.   

Here are few lessons learnt I managed to come across:
* write tests along with new functionality; don't leave it for later
* tests should be on all levels, all slices (units, services, controllers)
* new shiny technologies create new problems 
* be prepared to discuss problems with authors of frameworks 
    * it's great that [spring boot](https://projects.spring.io/spring-boot/) uses [gitter channel](https://gitter.im/spring-projects/spring-boot) and [github](https://github.com/spring-projects/spring-boot) to track issues
    * on the other hand I hate solving problems with Oracle support, which is proprietary shite
* prefer to know how the libraries you're using actually work rather than just taking them as given     
* when starting out in new company, assess all aspects, e.g. what application server you are going to use, you don't want to be solving weblogic's crazy classpath issues
* go for simple code, simple software
* have high ambitions
* discuss with team leader that even though it seems it is going to be simple system, you spend time solving technical problems instead of business ones initially
* you should know when perfectionism is the enemy of delivered
* use pragmatic approach to complex problems