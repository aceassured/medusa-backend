#!/bin/bash

		#Run migrations to ensure the database is updated
		npx medusa migrations run && npx medusa start

		#Admin username & password
                railway run npx medusa user --email bharath@aceassured.com --password aceassured

                  
		
		#Start development environment
		#npm run start 
  

  
