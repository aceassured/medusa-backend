#!/bin/bash

		#Run migrations to ensure the database is updated
		npx medusa migrations run && npx medusa start

		#Admin username & password
                npx medusa user --email bharath@aceassured.com --password aceassured

                  
		
		#Start development environment
		#npm run start 
  

  
